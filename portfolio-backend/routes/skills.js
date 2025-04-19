const express = require("express");
const router = express.Router();
const Skill = require("../models/skill");

// Show all skills
router.get("/", async (req, res) => {
    try {
        const skills = await Skill.find();
        res.render("skills", { title: "My Skills", skills });
    } catch (error) {
        res.status(500).send("Error fetching skills");
    }
});

// Show the form to add a new skill
router.get("/add", (req, res) => {
    res.render("add-skill", { title: "Add New Skill" });
});

// Handle form submission for adding a new skill
router.post("/add", async (req, res) => {
    try {
        const { name, level, category } = req.body;
        await Skill.create({ name, level, category });
        res.redirect("/skills");
    } catch (error) {
        res.status(500).send("Error adding skill");
    }
});
// Show edit form
router.get("/edit/:id", async (req, res) => {
    const skill = await Skill.findById(req.params.id);
    res.render("edit-skill", { title: "Edit Skill", skill });
});

// Handle update request
router.post("/edit/:id", async (req, res) => {
    const { name, level, category } = req.body;
    await Skill.findByIdAndUpdate(req.params.id, { name, level, category });
    res.redirect("/skills");
});

module.exports = router;