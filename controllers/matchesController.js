const db = require("../db/queries");

async function getMatches(req, res) {
    const Matchess = await db.getAll(Matches);
    console.log("Matchess: ", Matches);
    //res.send("Usernames: " + usernames.map(user => user.username).join(", "));
    res.render("index", {title: 'Matches List'});
  }

  async function createMatchPost(req, res) {
    const name = req.body.name;
    const score = req.body.score;
    const date = req.body.date;
    const note = req.body.date;
    const court = req.body.date;
    const winner = req.body.date;
    const loser = req.body.date;
    
    
    console.log("Matches: ", Matches);
    //res.send("Usernames: " + usernames.map(user => user.username).join(", "));
    res.render("index", {title: 'Matches List'});
  }

  module.exports = {
    MatchesListGet
  }