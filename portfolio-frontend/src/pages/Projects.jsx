import React, { useEffect, useState } from "react";
import api from "../api/api";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("/api/projects")
      .then(res => setProjects(res.data))
      .catch(err => console.error("❌ Failed to load projects", err));
  }, []);

  return (
    <section>
      <h2>Projects</h2>
      {projects.length === 0 ? (
        <p>Loading projects...</p>
      ) : (
        <ul>
          {projects.map((project) => (
            <li key={project._id}>
              <strong>{project.name}</strong>: {project.description}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Projects;