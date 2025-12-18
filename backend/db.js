const Database = require("better-sqlite3");
const db = new Database("equipment.db");

db.prepare(`
  CREATE TABLE IF NOT EXISTS equipment (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    type TEXT NOT NULL,
    status TEXT NOT NULL,
    lastCleanedDate TEXT NOT NULL
  )
`).run();

module.exports = db;
