const mongoose = require("mongoose");

const SkillSchema = new mongoose.Schema({
    name: { type: String, required: true },
    level: { type: String, required: true }, // Example: Beginner, Intermediate, Expert
    category: { type: String, required: true }
});

const Skill = mongoose.model("Skill", SkillSchema);

module.exports = Skill;

