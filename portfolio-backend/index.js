require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

// Middleware
app.set("views", path.join(__dirname, "templates"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
// Import and use routes
const projectRoutes = require("./routes/projects");
const skillRoutes = require("./routes/skills");
const apiRoutes = require("./api");
app.use("/api", apiRoutes);

app.use("/projects", projectRoutes);
app.use("/skills", skillRoutes);

// Connect to MongoDB
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Home Route
app.get("/", (req, res) => {
    res.render("index", { title: "Portfolio App" });
});

const Project = require("./models/project");
const Skill = require("./models/skill");
const userRoutes = require("./routes/user");
app.use("/profile", userRoutes);

// Function to add sample data if database is empty
async function initializeData() {
    const projectCount = await Project.countDocuments();
    const skillCount = await Skill.countDocuments();

    if (projectCount === 0) {
        await Project.insertMany([
            { title: "Portfolio Website", description: "A personal portfolio built with Node.js and Pug.", technologies: ["Node.js", "Express", "MongoDB"], year: 2024 },
            { title: "E-commerce App", description: "An online store with payment integration.", technologies: ["React", "Firebase", "Stripe"], year: 2023 }
        ]);
        console.log("✅ Sample Projects inserted!");
    }

    if (skillCount === 0) {
        await Skill.insertMany([
            { name: "JavaScript", level: "Expert", category: "Programming" },
            { name: "Node.js", level: "Intermediate", category: "Backend" },
            { name: "MongoDB", level: "Beginner", category: "Database" }
        ]);
        console.log("✅ Sample Skills inserted!");
    }
}

// Call the function to insert data when the server starts
initializeData();
// Start Server
app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
});