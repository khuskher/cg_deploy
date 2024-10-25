// Import required packages
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const path = require("path");
const cors = require("cors");
const session = require("express-session"); // Add express-session package
const crypto = require("crypto");

// Create an Express application
const app = express();

//Enable CORS
app.use(cors());

// Connect to MongoDB Atlas
mongoose
  .connect(
    "mongodb+srv://crimeGlance:crimeGlance@cluster0.evstr9t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB Atlas:", error);
  });

// Create a user schema
const userSchema = new mongoose.Schema({
  username: String,
  email: {
    type: String,
    unique: true, // Enforce uniqueness for email field
  },
  password: String,
});

// Create a user model
const User = mongoose.model("User", userSchema);

// Create a report schema
const reportSchema = new mongoose.Schema({
  title: String,
  time: String,
  date: String,
  category: String,
  area: String,
  city: String,
  state: String,
  description: String,
});

// Create a report model
const Report = mongoose.model("Report", reportSchema);

// Middleware for parsing JSON
app.use(express.json());

const generateSecretKey = () => {
  return crypto.randomBytes(32).toString("hex");
};

const secretKey = generateSecretKey();
// Middleware for session management
app.use(
  session({
    secret: secretKey, // Replace with a secret key for session management
    resave: false,
    saveUninitialized: false,
  })
);

// Middleware to check if user is authenticated
const checkAuthenticated = (req, res, next) => {
  if (req.session.isAuthenticated) {
    next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};

// Handle user registration
app.post("/api/register", async (req, res) => {
  try {
    // Extract username, email, and password from request body
    const { username, email, password } = req.body;

    // Check if user with the same email already exists
    const existingUser = await User.findOne({ email });

    // If user already exists, return an error
    if (existingUser) {
      return res.status(409).json({ message: "Email already registered" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await user.save();

    res.status(200).json({ message: "Registration successful" });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Handle user login
app.post("/api/login", async (req, res) => {
  try {
    // Extract username and password from request body
    const { username, password } = req.body;

    // Find the user in the database
    const user = await User.findOne({ username });

    // If user not found, return an error
    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);

    // If passwords don't match, return an error
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid username or password" });
    }
    // Passwords match, user is authenticated
    // Set isAuthenticated to true and store user data in session
    req.session.isAuthenticated = true;
    req.session.user = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Handle user logout
app.post("/api/logout", (req, res) => {
  // Destroy the session and redirect to the login page
  req.session.destroy((error) => {
    if (error) {
      console.error("Error during logout:", error);
      res.status(500).json({ message: "Internal server error" });
    } else {
      res.status(200).json({ message: "Logout successful" });
    }
  });
});

// Handle report form submission
app.post("/api/reports", async (req, res) => {
  try {
    const { title, time, date, area, city, state, category, description } =
      req.body;

    // Create a new report object
    const report = new Report({
      title,
      time,
      date,
      area,
      city,
      state,
      category,
      description,
    });

    // Save the report to the database
    await report.save();

    res.status(200).json({ message: "Report submitted successfully" });
  } catch (error) {
    console.error("Error during report submission:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Fetch all reports
app.get("/api/feed", async (req, res) => {
  try {
    // Retrieve all reports from the database
    const reports = await Report.find();

    res.status(200).json(reports);
  } catch (error) {
    console.error("Error during fetching reports:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Serve the built React app
const buildPath = path.join(__dirname, "..", "frontend", "public");
app.use(express.static(buildPath));

// Handle requests to the frontend app
app.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
