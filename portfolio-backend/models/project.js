const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    technologies: { type: [String], required: true },
    year: { type: Number, required: true }
});

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;

