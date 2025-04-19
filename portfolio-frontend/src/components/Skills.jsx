import React, { useEffect, useState } from "react";
// Example in Skills.jsx
import api from '../api'; // 
const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    api.get("/skills")
      .then(res => setSkills(res.data))
      .catch(err => console.error("Error fetching skills:", err));
  }, []);

  return (
    <div>
      <h2>Skills</h2>
      <ul>
        {skills.map(skill => (
          <li key={skill._id}>
            <strong>{skill.name}</strong> – {skill.level} ({skill.category})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;