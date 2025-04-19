import React, { useEffect, useState } from "react";
import { fetchProjects } from "../api/api";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects()
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching projects:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading projects...</p>;

  return (
    <div>
      <h2>My Projects</h2>
      {projects.map(project => (
        <div key={project._id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Projects;