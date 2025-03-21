const pool = require("./pool");

async function getAll(table) {
  const { rows } = await pool.query("SELECT * FROM $1", [table]);
  return rows;
}

async function SearchPlayer(player) {
  const { rows } = await pool.query("SELECT * FROM players WHERE player ILIKE $1", [player]);
  return rows;
}

async function insertMatch(court, date, note, team1_score, team2_score, winnter_team) {
  
  await pool.query("INSERT INTO matches (court, date, note, team1_score, team2_score, winner_team) VALUES ($1,$2,$3,$4,$5,$6)", [court, date, note, team1_score, team2_score, winnter_team]);
}

async function insertPlayer(username, winrate, rank, total_games, total_wins) {
  
  await pool.query("INSERT INTO players (username, winrate, rank, total_games, total_wins) VALUES ($1,$2,$3,$4,$5)", [username, winrate, rank, total_games, total_wins]);
}



module.exports = {
  getAll,
  insertMatch,
  insertPlayer,
  SearchPlayer,
};