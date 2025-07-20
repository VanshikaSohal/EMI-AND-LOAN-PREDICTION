import React,{useState} from 'react';
function Formpage({setPage,setResult}) {
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
  console.log("setPage received:", typeof setPage);

const handleChange=(e)=>{
  setFormData({
    ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {

  e.preventDefault();
    try {
            const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
 },
        body: JSON.stringify(formData),
              });
      const result = await response.json();
      setResult(result);
      setPage('result');

          } catch (error) {
      console.error('Error submitting form:', error);
       }
  };
 return (
  <div className="form-container">
    <form onSubmit={handleSubmit}>
  <label>Gender:</label>
  <select
    name="gender"
    value={formData.gender}
    onChange={handleChange}
    className="form-select"
  >
    <option value="">Select</option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
  </select>

  <label>Married:</label>
  <select
    name="married"
    value={formData.married}
    onChange={handleChange}
    className="form-select"
  >
    <option value="">Select</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>

  <label>Education:</label>
  <select
    name="education"
    value={formData.education}
    onChange={handleChange}
    className="form-select"
  >
    <option value="">Select</option>
    <option value="Graduate">Graduate</option>
    <option value="Not Graduate">Not Graduate</option>
  </select>

  <label>Self Employed:</label>
  <select
    name="self_employed"
    value={formData.self_employed}
    onChange={handleChange}
    className="form-select"
  >
    <option value="">Select</option>
    <option value="Yes">Yes</option>
    <option value="No">No</option>
  </select>

  <label>Applicant Income:</label>
  <input
    type="number"
    name="applicantincome"
    value={formData.applicantincome}
    onChange={handleChange}
    className="form-input"
  />

  <label>Coapplicant Income:</label>
  <input
    type="number"
    name="coapplicantincome"
    value={formData.coapplicantincome}
    onChange={handleChange}
    className="form-input"
  />

  <label>Loan Amount:</label>
  <input
    type="number"
    name="loanamount"
    value={formData.loanamount}
    onChange={handleChange}
    className="form-input"
  />

  <label>Loan Amount Term (in days):</label>
  <input
    type="number"
    name="loan_amount_term"
    value={formData.loan_amount_term}
    onChange={handleChange}
    className="form-input"
  />

  <label>Credit History (0 or 1):</label>
  <input
    type="number"
    name="credit_history"
    value={formData.credit_history}
    onChange={handleChange}
    className="form-input"
  />

  <label>Property Area:</label>
  <select
    name="property_area"
    value={formData.property_area}
    onChange={handleChange}
    className="form-select"
  >
    <option value="">Select</option>
    <option value="Urban">Urban</option>
    <option value="Semiurban">Semiurban</option>
    <option value="Rural">Rural</option>
  </select>
<button type="submit" className="submit-btn">Submit</button>
</form>
</div>
);
}

export default Formpage;