💰 EMI Loan Prediction App
This is a full-stack machine learning web application that predicts EMI loan eligibility based on user input. 
The frontend is built using React, and the backend uses Flask .
This project includes machine learning models trained from scratch using  dataset taken from Kaggle to predict loan eligibility.

LoanPredictionProject/
├── Backend/
│   ├── models/
│   │   ├── class_model.pkl
│   │   └── reg_model.pkl
│   ├── app.py
│   ├── train_model.py
│   └── requirements.txt
│
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── manifest.json
│   ├── src/
│   │   ├── App.js
│   │   ├── App.test.js
│   │   ├── Formpage.js
│   │   ├── Homepage.js
│   │   ├── index.js
│   │   ├── logo.png
│   │   ├── Form.css
│   │   ├── Home.css
│   │   ├── index.css
│   │   └── reportWebVitals.js
│   ├── .gitignore 
│   ├── package-lock.json
│   ├── package.json
│
├── README.md 



🚀 Features
Predict loan approval using machine learning

Interactive, responsive frontend with React

RESTful API backend using Flask

Trained classification and regression models

Input validation for form fields


⚙️ Setup Instructions

1. Clone the Repository
git clone https://github.com/VanshikaSohal/EMI-AND-LOAN-PREDICTION.git
cd emi-loan-prediction-app

2. Backend Setup (Flask)
cd Backend
python -m venv venv
source venv/bin/activate      # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py
Backend: https://emi-and-loan-prediction-4qva.onrender.com/

3. Frontend Setup (React)
cd frontend
npm install
npm start

DEPLOYED PROJECT LINK:
https://lnkd.in/gAY7n4eh

Ensure CORS is enabled in your Flask backend to allow communication.

🧠 Model Training
To retrain or update models:
cd Backend
python train_model.py
This script loads the dataset, trains a classification model, and saves it as .pkl files in the models/ directory.

🔗 Social Links
Homepage displays:

✉️ Email

💼 LinkedIn

💻 GitHub

These are located at the bottom-right corner of the homepage.


🙋‍♀️ Author
Vanshika Sohal


