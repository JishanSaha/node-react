const express = require("express");
const cors = require("cors");
const router = express.Router();
const fs = require("fs");
const path = require("path");

const app = express(); // Create app instance
app.use(cors());  



// Load all projects
app.get("/api/projects", (req, res) => {
  console.log("Loading projects...");

  const dataPath = path.join(__dirname, "portfolio_projects.json"); // Adjust path if needed

  try {
    const fileContent = fs.readFileSync(dataPath, "utf8");
    const projects = JSON.parse(fileContent);
    res.json(projects); // Send parsed JSON data
  } catch (err) {
    console.error("Error reading or parsing JSON file:", err);
    res.status(500).json({ error: "Failed to load projects." });
  }
});

// Load all skills
app.get("/api/skills", (req, res) => {
  console.log("Loading skills...");

  const dataPath = path.join(__dirname, "portfolio_skills.json"); // Adjust path if needed

  try {
    const fileContent = fs.readFileSync(dataPath, "utf8");
    const skills = JSON.parse(fileContent);
    res.json(skills); // Send parsed JSON data
  } catch (err) {
    console.error("Error reading or parsing JSON file:", err);
    res.status(500).json({ error: "Failed to load skills." });
  }
});

// Load all projects
app.get("/api/users", (req, res) => {
  console.log("Loading projects...");

  const dataPath = path.join(__dirname, "portfolio_users.json"); // Adjust path if needed

  try {
    const fileContent = fs.readFileSync(dataPath, "utf8");
    const projects = JSON.parse(fileContent);
    res.json(projects); // Send parsed JSON data
  } catch (err) {
    console.error("Error reading or parsing JSON file:", err);
    res.status(500).json({ error: "Failed to load projects." });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
// module.exports = router;