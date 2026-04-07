// Valid confession categories - these are the only allowed types
const VALID_CATEGORIES = ["bug", "deadline", "imposter", "vibe-code"];

// Confession text length constraints
const MIN_CONFESSION_LENGTH = 1;
const MAX_CONFESSION_LENGTH = 500;

module.exports = {
  VALID_CATEGORIES,
  MIN_CONFESSION_LENGTH,
  MAX_CONFESSION_LENGTH,
};
