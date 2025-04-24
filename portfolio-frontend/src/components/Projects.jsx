import React, { useEffect, useState } from "react";
import { getProjects } from "../api/api";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProjects()
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
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Technologies:</strong> {project.technologies?.join(", ")}</p>
              <p><strong>Year:</strong> {project.year}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Projects;