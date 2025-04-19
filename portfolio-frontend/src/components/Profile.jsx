import React, { useEffect, useState } from "react";
import * as api from "../api/api";
import "./Profile.css";

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get("/api/users/1"); // assuming user ID is 1
        setProfile(response.data);
      } catch (err) {
        console.error("❌ Failed to load profile", err);
      }
    };

    fetchProfile();
  }, []);

  if (!profile) {
    return <p>Loading profile...</p>;
  }

  return (
    <div className="profile">
      <h2>{profile.name}</h2>
      <p>Email: {profile.email}</p>
      <p>Bio: {profile.bio}</p>
    </div>
  );
};

export default Profile;