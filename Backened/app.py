from flask import Flask, request, jsonify
import joblib
import numpy as np
from flask_cors import CORS
from sklearn.linear_model import LinearRegression

app = Flask(__name__)
CORS(app)#CORS allows frontend to talk to backened

# Load trained models
reg_model = joblib.load("models/reg_model.pkl")
class_model = joblib.load("models/class_model.pkl")


@app.route('/predict',methods=['POST'])
def predict():
    data = request.get_json()

    model_type = data.get('model_type')  # either "regression" or "classification"
    input_features = np.array(data['features']).reshape(1, -1)

    if model_type == 'regression':
        prediction = reg_model.predict(input_features)
        return jsonify({'prediction': prediction[0].item()})
    
    elif model_type == 'classification':
        prediction = class_model.predict(input_features)
        result = "Loan Approved" if prediction[0] == 1 else "Loan Rejected"
        return jsonify({'prediction': result})
    
    else:
        return jsonify({'error': 'Invalid model type'}), 400


if __name__ == '__main__':
    app.run(debug=True)