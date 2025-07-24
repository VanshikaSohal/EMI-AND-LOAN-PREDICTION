from flask import Flask, request, jsonify
import joblib
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load classification model
class_model = joblib.load("Backened/models/class_model.pkl")

# Mapping function to encode categorical fields
def preprocess_input(form):
    return {
        "ApplicantIncome": form["applicantincome"],
        "CoapplicantIncome": form["coapplicantincome"],
        "LoanAmount": form["loanamount"],
        "Loan_Amount_Term": form["loan_amount_term"],
        "Credit_History": form["credit_history"],
        "EMI": form["emi"] if "emi" in form else 0  
    }

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        if not data:
            return jsonify({'error': 'No input data received'}), 400

        form_data = data['formData']
        processed_data = preprocess_input(form_data)
        input_df = pd.DataFrame([processed_data])

        prediction = class_model.predict(input_df)[0]
        result = "Loan Approved" if prediction == 1 else "Loan Rejected"

        return jsonify({'prediction': result})

    except Exception as e:
        print("Error:", str(e))
        return jsonify({'error': str(e)}), 500

@app.route('/')
def home():
    return "Flask backend is running!"

if __name__ == '__main__':
    app.run(debug=True, port=5000)
