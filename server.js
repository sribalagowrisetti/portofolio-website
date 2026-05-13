const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Sample project data
const projects = [
  {
    title: "Portfolio Website",
    description: "Full stack portfolio project using HTML, CSS, JS, Node.js"
  },
  {
    title: "Health App",
    description: "Digital health management system project"
  }
];

// API route
app.get("/projects", (req, res) => {
  res.json(projects);
});

// Start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});