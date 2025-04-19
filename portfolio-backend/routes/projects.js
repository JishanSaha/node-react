const express = require("express");
const router = express.Router();
const Project = require("../models/project");

// Show all projects
router.get("/", async (req, res) => {
    try {
        const projects = await Project.find();
        res.render("projects", { title: "My Projects", projects });
    } catch (error) {
        res.status(500).send("Error fetching projects");
    }
});

// Show the form to add a new project
router.get("/add", (req, res) => {
    res.render("add-project", { title: "Add New Project" });
});

// Handle form submission for adding a new project
router.post("/add", async (req, res) => {
    try {
        const { title, description, technologies, year } = req.body;
        await Project.create({ title, description, technologies: technologies.split(","), year });
        res.redirect("/projects");
    } catch (error) {
        res.status(500).send("Error adding project");
    }
});
// Show edit form
router.get("/edit/:id", async (req, res) => {
    const project = await Project.findById(req.params.id);
    res.render("edit-project", { title: "Edit Project", project });
});

// Handle update request
router.post("/edit/:id", async (req, res) => {
    const { title, description, technologies, year } = req.body;
    await Project.findByIdAndUpdate(req.params.id, { title, description, technologies: technologies.split(","), year });
    res.redirect("/projects");
});

module.exports = router;