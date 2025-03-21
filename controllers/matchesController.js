const db = require("../db/queries");

async function getMatches(req, res) {
    const Matchess = await db.getAll(Matches);
    console.log("Matches: ", Matches);
    //res.send("Usernames: " + usernames.map(user => user.username).join(", "));
    res.render("index", {title: 'Matches List'});
  }

  async function createMatchPost(req, res) {
    const { team1_name1, team1_name2, team1_score, team2_name1, team2_name2, team2_score, court, date, note} = req.body;
    var winner_team = 0;
    db.insertMatch(court,date,note,team1_score,team2_score,winner_team);

    var winrate = 0;
    var rank = 0;
    var total_games = 0;
    var total_wins = 0;

    db.insertPlayer(team1_name1, winrate, rank, total_games, total_wins);
    db.insertPlayer(team1_name2, winrate, rank, total_games, total_wins);
    db.insertPlayer(team2_name1, winrate, rank, total_games, total_wins);
    db.insertPlayer(team2_name2, winrate, rank, total_games, total_wins);
    
    //res.send("Usernames: " + usernames.map(user => user.username).join(", "));
    res.redirect("/");
  }

  module.exports = {
    getMatches,
    createMatchPost
  }