// In-memory data store for confessions
const confessions = [];
let idCounter = 0;

const {
  VALID_CATEGORIES,
  MIN_CONFESSION_LENGTH,
  MAX_CONFESSION_LENGTH,
} = require("../constants/categories");

// Create and store a new confession
function createConfession(confessionData) {
  const newConfession = {
    id: ++idCounter,
    text: confessionData.text,
    category: confessionData.category,
    created_at: new Date(),
  };
  confessions.push(newConfession);
  return newConfession;
}

// Get all confessions sorted by newest first
function getAllConfessions() {
  return confessions.sort((a, b) => b.created_at - a.created_at);
}

// Get a single confession by ID
function getConfessionById(confessionId) {
  return confessions.find((conf) => conf.id === confessionId);
}

// Get confessions filtered by category
function getConfessionsByCategory(category) {
  return confessions
    .filter((confession) => confession.category === category)
    .reverse();
}

// Delete a confession by ID
function deleteConfession(confessionId) {
  const index = confessions.findIndex((conf) => conf.id === confessionId);
  if (index !== -1) {
    const deleted = confessions.splice(index, 1);
    return deleted[0];
  }
  return null;
}

// Validate a confession object before storage
function validateConfession(confessionData) {
  if (!confessionData || !confessionData.text) {
    return { valid: false, error: "need text" };
  }
  if (confessionData.text.length < MIN_CONFESSION_LENGTH) {
    return { valid: false, error: "too short" };
  }
  if (confessionData.text.length >= MAX_CONFESSION_LENGTH) {
    return {
      valid: false,
      error: "text too big, must be less than 500 characters long buddy",
    };
  }
  if (!VALID_CATEGORIES.includes(confessionData.category)) {
    return { valid: false, error: "category not in stuff" };
  }
  return { valid: true };
}

// Check if a category is valid
function isValidCategory(category) {
  return VALID_CATEGORIES.includes(category);
}

module.exports = {
  createConfession,
  getAllConfessions,
  getConfessionById,
  getConfessionsByCategory,
  deleteConfession,
  validateConfession,
  isValidCategory,
};
