const express = require("express");
const router = express.Router();
const User = require("../models/user");

// Display profile page
router.get("/", async (req, res) => {
    let user = await User.findOne();

    // If no user exists, create a default one
    if (!user) {
        user = new User({
            name: "Jishan Saha",
            bio: "Full Stack Developer",
            email: "jishansahaofficial@gmail.com",
            phone: "416-276-0721"
        });
        await user.save();
    }
    res.render("view-profile", { title: "My Profile", user });
});

// Get user by ID
router.get("/api/users/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: "Error fetching user", error: err.message });
    }
});

// Display edit profile form
router.get("/edit", async (req, res) => {
    let user = await User.findOne();
    res.render("edit-profile", { title: "Edit Profile", user });
});

// Handle profile update
router.post("/edit", async (req, res) => {
    const { name, bio, email, phone } = req.body;
    await User.updateOne({}, { name, bio, email, phone }, { upsert: true });
    res.redirect("/profile");
});

module.exports = router;