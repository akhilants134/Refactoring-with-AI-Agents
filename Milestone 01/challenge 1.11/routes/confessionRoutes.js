const express = require("express");
const router = express.Router();
const confessionController = require("../controllers/confessionController");

// POST /api/v1/confessions - Create a new confession
router.post("/", confessionController.createConfession);

// GET /api/v1/confessions - Get all confessions
router.get("/", confessionController.getAllConfessions);

// GET /api/v1/confessions/category/:cat - Get confessions by category
router.get("/category/:cat", confessionController.getConfessionsByCategory);

// GET /api/v1/confessions/:id - Get a single confession
router.get("/:id", confessionController.getConfessionById);

// DELETE /api/v1/confessions/:id - Delete a confession
router.delete("/:id", confessionController.deleteConfession);

module.exports = router;
