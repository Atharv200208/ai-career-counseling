import { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8000/api/profile") // Laravel API URL
      .then(response => {
        setProfile(response.data);
      })
      .catch(error => {
        console.error("Error fetching profile:", error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h1>My Profile</h1>
      {profile ? (
        <div className="card p-3">
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Career Interest:</strong> {profile.career_interest}</p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
}

export default Profile;
