const express = require("express");
const User = require("./models/User");
const router = express.Router();

// POST: Create a new user
router.post("/signup", async (req, res) => {
  try {
    console.log("Received request body:", req.body); // Debugging

    const { name, email, password } = req.body;
    
    // Check if all fields are provided
    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields (name, email, age) are required." });
    }

    const user = new User({ name, email, password });
    await user.save();

    res.status(201).json(user); // Send response with created user
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: error.message });
  }
});

// GET: Retrieve all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
