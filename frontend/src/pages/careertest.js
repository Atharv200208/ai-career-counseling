import { useState } from "react";
import axios from "axios";

function CareerTest() {
  const [answers, setAnswers] = useState({
    creativity: "",
    problemSolving: "",
    leadership: "",
    technologyInterest: "",
    communication: "",
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setAnswers({
      ...answers,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/career-test", answers);
      setResult(response.data.suggestion);
    } catch (error) {
      console.error("Error submitting test:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h1>Career Test</h1>
      <p>Answer the following questions to get AI-based career suggestions.</p>

      <form onSubmit={handleSubmit} className="card p-4">
        <label className="form-label">How creative are you? (1-5)</label>
        <input type="number" className="form-control" name="creativity" min="1" max="5" onChange={handleChange} required />

        <label className="form-label mt-3">How good are you at problem-solving? (1-5)</label>
        <input type="number" className="form-control" name="problemSolving" min="1" max="5" onChange={handleChange} required />

        <label className="form-label mt-3">Do you enjoy leading a team? (1-5)</label>
        <input type="number" className="form-control" name="leadership" min="1" max="5" onChange={handleChange} required />

        <label className="form-label mt-3">Are you interested in technology? (Yes/No)</label>
        <select className="form-control" name="technologyInterest" onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <label className="form-label mt-3">How strong are your communication skills? (1-5)</label>
        <input type="number" className="form-control" name="communication" min="1" max="5" onChange={handleChange} required />

        <button type="submit" className="btn btn-primary mt-4">Submit</button>
      </form>

      {result && (
        <div className="alert alert-success mt-4">
          <h4>Suggested Career Path:</h4>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}

export default CareerTest;
