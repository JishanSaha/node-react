const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

// Load user data
router.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  const dataPath = path.join(__dirname, "portfolio.users.json");
  const users = JSON.parse(fs.readFileSync(dataPath, "utf8"));
  const user = users.find((u) => u.id === parseInt(userId));
  if (user) res.json(user);
  else res.status(404).json({ message: "User not found" });
});

// Load all projects
router.get("/projects", (req, res) => {
  const dataPath = path.join(__dirname, "portfolio.projects.json");
  const projects = JSON.parse(fs.readFileSync(dataPath, "utf8"));
  res.json(projects);
});

// Load all skills
router.get("/skills", (req, res) => {
  const dataPath = path.join(__dirname, "portfolio.skills.json");
  const skills = JSON.parse(fs.readFileSync(dataPath, "utf8"));
  res.json(skills);
});

module.exports = router;