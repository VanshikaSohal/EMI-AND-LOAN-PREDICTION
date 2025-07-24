import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import LabelEncoder
from sklearn.ensemble import RandomForestRegressor, RandomForestClassifier
from sklearn.metrics import mean_squared_error, accuracy_score
from sklearn.preprocessing import StandardScaler
import joblib
import os


df = pd.read_csv("dataset/loan-train.csv")  
#Removes rows with NaN values to avoid model training errors
df.dropna(inplace=True)

df["EMI"] = (df["LoanAmount"] * 1000) / df["Loan_Amount_Term"]

#ML models cannot directly work on strings so convert them to numbers
cat_cols = ["Gender", "Married", "Education", "Self_Employed", "Property_Area", "Loan_Status"]
le = LabelEncoder()
for col in cat_cols:
    df[col] = le.fit_transform(df[col])

#Regression part
reg_features = ["ApplicantIncome", "CoapplicantIncome", "Loan_Amount_Term", "Credit_History"]
X_reg = df[reg_features]
y_reg = df["EMI"]

X_train_reg, X_test_reg, y_train_reg, y_test_reg = train_test_split(X_reg, y_reg, test_size=0.2, random_state=42)

scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train_reg)
X_test_scaled = scaler.transform(X_test_reg)

reg_model=LinearRegression()
reg_model.fit(X_train_scaled,y_train_reg)
y_pred=reg_model.predict(X_test_scaled)

#Classification part
class_features = ["ApplicantIncome", "CoapplicantIncome", "LoanAmount", "Loan_Amount_Term", "Credit_History", "EMI"]
X_class = df[class_features]
y_class = df["Loan_Status"]

X_train_class, X_test_class, y_train_class, y_test_class = train_test_split(
    X_class, y_class, test_size=0.2, random_state=42
)

class_model = RandomForestClassifier()
class_model.fit(X_train_class, y_train_class)

y_pred_class = class_model.predict(X_test_class)
print("Classification Accuracy:", accuracy_score(y_test_class, y_pred_class))

# Create the directory if not exists
save_dir = "backened/models"
os.makedirs(save_dir, exist_ok=True)

#Paths to save the model
reg_model_path = os.path.join(save_dir, "reg_model.pkl")
class_model_path = os.path.join(save_dir, "class_model.pkl")

#Save regression model
try:
    joblib.dump(reg_model, reg_model_path)
    print(f" Regression model saved at: {reg_model_path}")
except Exception as e:
    print(" Failed to save regression model:", e)

#Save classification model
try:
    joblib.dump(class_model, class_model_path)
    print(f"Classification model saved at: {class_model_path}")
except Exception as e:
    print(" Failed to save classification model:", e)

