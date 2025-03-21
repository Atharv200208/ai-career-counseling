import { useEffect, useState } from "react";
import axios from "axios";

function Mentorship() {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/mentors")
      .then(response => {
        setMentors(response.data);
      })
      .catch(error => {
        console.error("Error fetching mentors:", error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h1>Virtual Mentorship Program</h1>
      <p>Connect with experienced professionals in your career field.</p>

      <div className="row">
        {mentors.map((mentor, index) => (
          <div key={index} className="col-md-4">
            <div className="card p-3 mb-3">
              <h5>{mentor.name}</h5>
              <p><strong>Expertise:</strong> {mentor.expertise}</p>
              <p><strong>Experience:</strong> {mentor.years_experience} years</p>
              <a href={`mailto:${mentor.email}`} className="btn btn-primary">Contact</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mentorship;
