const db = require("../db/queries");

async function playerListGet(req, res) {
    const players = await db.getAll(players);
    console.log("Players: ", players);
    //res.send("Usernames: " + usernames.map(user => user.username).join(", "));
    res.render("rankings", {title: 'Players List'});
  }

  module.exports = {
    playerListGet
  }