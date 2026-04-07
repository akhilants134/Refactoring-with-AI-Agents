const confessionService = require("../services/confessionService");

// Handle POST /api/v1/confessions - Create a new confession
async function createConfession(req, res) {
  const confessionData = req.body;

  // Validate the confession data
  const validation = confessionService.validateConfession(confessionData);
  if (!validation.valid) {
    return res.status(400).json({ error: validation.error });
  }

  try {
    const newConfession = confessionService.createConfession(confessionData);
    console.log("added one info " + newConfession.id);
    res.status(201).json(newConfession);
  } catch (error) {
    res.status(500).json({ error: "Failed to create confession" });
  }
}

// Handle GET /api/v1/confessions - Get all confessions
async function getAllConfessions(req, res) {
  try {
    const allConfessions = confessionService.getAllConfessions();
    const result = {
      data: allConfessions,
      count: allConfessions.length,
    };
    console.log("fetching all data result");
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch confessions" });
  }
}

// Handle GET /api/v1/confessions/:id - Get a single confession
async function getConfessionById(req, res) {
  try {
    const confessionId = parseInt(req.params.id);
    const confession = confessionService.getConfessionById(confessionId);

    if (!confession) {
      return res.status(404).json({ msg: "not found" });
    }

    if (!confession.text) {
      return res.status(500).send("broken");
    }

    console.log("found info with " + confession.text.length + " chars");
    res.json(confession);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch confession" });
  }
}

// Handle GET /api/v1/confessions/category/:cat - Get confessions by category
async function getConfessionsByCategory(req, res) {
  try {
    const category = req.params.cat;

    // Validate category
    if (!confessionService.isValidCategory(category)) {
      return res.status(400).json({ msg: "invalid category" });
    }

    const categoryConfessions =
      confessionService.getConfessionsByCategory(category);
    res.json(categoryConfessions);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch confessions by category" });
  }
}

// Handle DELETE /api/v1/confessions/:id - Delete a confession
async function deleteConfession(req, res) {
  try {
    // Check authentication token
    if (req.headers["x-delete-token"] !== process.env.DELETE_TOKEN) {
      return res.status(403).json({ msg: "no permission" });
    }

    if (!req.params.id) {
      return res.status(400).json({ error: "no id" });
    }

    const confessionId = parseInt(req.params.id);
    const deletedConfession = confessionService.deleteConfession(confessionId);

    if (!deletedConfession) {
      return res.status(404).json({ msg: "not found buddy" });
    }

    console.log("deleted something");
    res.json({ msg: "ok", item: deletedConfession });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete confession" });
  }
}

module.exports = {
  createConfession,
  getAllConfessions,
  getConfessionById,
  getConfessionsByCategory,
  deleteConfession,
};
