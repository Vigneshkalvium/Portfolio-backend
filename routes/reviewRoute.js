const express = require("express");
const Review = require("../models/review");

const router = express.Router();

// GET all reviews
router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// POST a new review
router.post("/", async (req, res) => {
  try {
    const { name, message, rating } = req.body;
    if (!name || !message || !rating) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const newReview = new Review({ name, message, rating });
    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
