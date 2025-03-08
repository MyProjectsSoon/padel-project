const pool = require("./pool");

async function getAll(table) {
  const { rows } = await pool.query("SELECT * FROM $1", [table]);
  return rows;
}

async function SearchPlayer(player) {
  const { rows } = await pool.query("SELECT * FROM players WHERE player ILIKE $1", [player]);
  return rows;
}
async function insertPlayer(player) {
  
  await pool.query("INSERT INTO players (player) VALUES ($1)", [player]);
}

async function deletePlayers()
{
  await pool.query("DELETE FROM players");
}

module.exports = {
  getAll,
  insertPlayer,
  SearchPlayer,
  deletePlayers
};