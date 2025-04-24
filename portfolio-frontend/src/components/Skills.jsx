import React, { useEffect, useState } from "react";
import { getSkills } from "../api/api";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getSkills()
      .then(data => {
        console.log("Fetched projects:", data);
        setProjects(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching projects:", err);
        setError("Failed to load projects.");
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Projects</h2>
      {loading ? (
        <p>Loading projects...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        <ul>
          {projects.map((project, index) => (
            <li key={index} style={{ marginBottom: "1rem" }}>
              <h3>{project.name}</h3>
              <p>{project.level}</p>
              {/* <p><strong>Category:</strong> {project.category?.join(", ")}</p> */}
              <p><strong>Category:</strong> {project.category}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Projects;