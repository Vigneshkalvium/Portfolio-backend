const express = require("express");
const cors = require("cors");
const connectDB = require("./database/connection");
const Review = require("./models/review");
require("dotenv").config();
const reviewRoute = require("./routes/reviewRoute")

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());


app.use('/api/review',reviewRoute);
// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT} ✅`));
