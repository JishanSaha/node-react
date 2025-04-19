import React, { useEffect, useState } from "react";
import api from "../api/api";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    api.get("/api/skills")
      .then(res => setSkills(res.data))
      .catch(err => console.error("❌ Failed to load skills", err));
  }, []);

  return (
    <section>
      <h2>Skills</h2>
      {skills.length === 0 ? (
        <p>Loading skills...</p>
      ) : (
        <ul>
          {skills.map(skill => (
            <li key={skill._id}>{skill.name} - {skill.level}</li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Skills;