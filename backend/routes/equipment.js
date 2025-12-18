const express = require("express");
const router = express.Router();
const db = require("../db");

// GET all equipment
router.get("/", (req, res) => {
  const items = db.prepare("SELECT * FROM equipment").all();
  res.json(items);
});

// ADD equipment
router.post("/", (req, res) => {
  const { name, type, status, lastCleanedDate } = req.body;

  if (!name || !type || !status || !lastCleanedDate) {
    return res.status(400).json({ error: "All fields required" });
  }

  const result = db.prepare(`
    INSERT INTO equipment (name, type, status, lastCleanedDate)
    VALUES (?, ?, ?, ?)
  `).run(name, type, status, lastCleanedDate);

  res.json({ id: result.lastInsertRowid });
});

// UPDATE equipment
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, type, status, lastCleanedDate } = req.body;

  db.prepare(`
    UPDATE equipment
    SET name=?, type=?, status=?, lastCleanedDate=?
    WHERE id=?
  `).run(name, type, status, lastCleanedDate, id);

  res.json({ message: "Updated successfully" });
});

// DELETE equipment
router.delete("/:id", (req, res) => {
  db.prepare("DELETE FROM equipment WHERE id=?").run(req.params.id);
  res.json({ message: "Deleted successfully" });
});

module.exports = router;
