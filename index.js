// Import required modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');

const app = express(); // Create an Express application

app.use(cors());
// Middleware to parse JSON data in requests
app.use(express.json()); // This is enough; no need for bodyParser.json()


const userRoutes = require("./routes/userRoutes"); // Import user routes
// Mount the user routes at /users
app.use("/users", userRoutes);

// Database connection function
const database = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://rmaslog230000000654:5oZeYHFcLZNi65wN@maslog.nkx8v.mongodb.net/?appName=Maslog", 
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ Database Connection Failed:", error);
  }
};

// Call the database connection function
database();

// Start the Express server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
