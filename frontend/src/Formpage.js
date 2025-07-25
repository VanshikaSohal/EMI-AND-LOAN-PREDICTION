import React, { useState } from 'react';
import './Form.css'; 

function Formpage({ setResult, result, setPage }) {
  const [formData, setFormData] = useState({
    gender: '',
    married: '',
    education: '',
    self_employed: '',
    applicantincome: '',
    coapplicantincome: '',
    loanamount: '',
    loan_amount_term: '',
    credit_history: '',
    property_area: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const isEmptyField = Object.values(formData).some((value) => value === '');
  if (isEmptyField) {
    alert('Please fill in all fields before submitting.');
    return;
  }

  try {    
    const response = await fetch(" https://emi-and-loan-prediction-4qva.onrender.com/predict", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(formData),
})


    const result = await response.json();
    setResult(result.prediction); 
    console.log("API response: ", result);
  } catch (error) {
    console.error('Error while calling backend:', error);
  }
};

  return (
    <div className="predictor-section">
      <div className="container">
        {result && (
  <div
    className={`prediction-message ${
      result === 'Loan Approved' ? 'approved' : 'rejected'
    }`}
  >
    {result}
  </div>
)}
        <header>
          <h2>Loan Eligibility Form</h2>
        </header>
        <form className="form-grid" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Gender:</label>
            <select name="gender" value={formData.gender} onChange={handleChange} className="form-select">
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="form-group">
            <label>Married:</label>
            <select name="married" value={formData.married} onChange={handleChange} className="form-select">
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="form-group">
            <label>Education:</label>
            <select name="education" value={formData.education} onChange={handleChange} className="form-select">
              <option value="">Select</option>
              <option value="Graduate">Graduate</option>
              <option value="Not Graduate">Not Graduate</option>
            </select>
          </div>

          <div className="form-group">
            <label>Self Employed:</label>
            <select name="self_employed" value={formData.self_employed} onChange={handleChange} className="form-select">
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="form-group">
            <label>Applicant Income:</label>
            <input type="number" name="applicantincome" value={formData.applicantincome} onChange={handleChange} className="form-input" />
          </div>

          <div className="form-group">
            <label>Coapplicant Income:</label>
            <input type="number" name="coapplicantincome" value={formData.coapplicantincome} onChange={handleChange} className="form-input" />
          </div>

          <div className="form-group">
            <label>Loan Amount:</label>
            <input type="number" name="loanamount" value={formData.loanamount} onChange={handleChange} className="form-input" />
          </div>

          <div className="form-group">
            <label>Loan Amount Term (in days):</label>
            <input type="number" name="loan_amount_term" value={formData.loan_amount_term} onChange={handleChange} className="form-input" />
          </div>

          <div className="form-group">
            <label>Credit History (0 or 1):</label>
            <input type="number" name="credit_history" value={formData.credit_history} onChange={handleChange} className="form-input" />
          </div>

          <div className="form-group">
            <label>Property Area:</label>
            <select name="property_area" value={formData.property_area} onChange={handleChange} className="form-select">
              <option value="">Select</option>
              <option value="Urban">Urban</option>
              <option value="Semiurban">Semiurban</option>
              <option value="Rural">Rural</option>
            </select>
          </div>

          <button type="submit" className="btn-submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Formpage;
