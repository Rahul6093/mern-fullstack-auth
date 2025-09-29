const express = require("express");
const User = require("../models/User");

const router = express.Router();

// Create
router.post("/signup", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json({ success: true, message: "User registered successfully" });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (user) {
    res.json({ success: true, user });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

// Read all
router.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Update
router.put("/users/:id", async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.json({ success: true, message: "User updated" });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// Delete
router.delete("/users/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "User deleted" });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

module.exports = router;
