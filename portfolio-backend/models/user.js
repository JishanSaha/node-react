const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    bio: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;