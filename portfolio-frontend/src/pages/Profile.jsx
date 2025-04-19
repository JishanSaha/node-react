import React, { useEffect, useState } from "react";
import api from "../api/api";

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    api.get("/api/users/1") // Replace `1` with dynamic id if needed
      .then(res => setProfile(res.data))
      .catch(err => console.error("❌ Failed to load profile", err));
  }, []);

  if (!profile) return <p>Loading profile...</p>;

  return (
    <section>
      <h2>{profile.name}</h2>
      <p>Email: {profile.email}</p>
      <p>Bio: {profile.bio}</p>
    </section>
  );
};

export default Profile;