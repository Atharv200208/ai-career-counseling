import { useState } from "react";
import axios from "axios";

function ResumeOptimization() {
  const [resumeText, setResumeText] = useState("");
  const [suggestions, setSuggestions] = useState(null);

  const handleChange = (e) => {
    setResumeText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/optimize-resume", { resumeText });
      setSuggestions(response.data.suggestions);
    } catch (error) {
      console.error("Error optimizing resume:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h1>Resume Optimization</h1>
      <p>Paste your resume below to get AI-based suggestions for improvement.</p>

      <form onSubmit={handleSubmit} className="card p-4">
        <textarea className="form-control" rows="6" placeholder="Paste your resume here..." onChange={handleChange} required></textarea>
        <button type="submit" className="btn btn-primary mt-3">Get Suggestions</button>
      </form>

      {suggestions && (
        <div className="alert alert-success mt-4">
          <h4>Resume Improvement Suggestions:</h4>
          <ul>
            {suggestions.map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ResumeOptimization;
