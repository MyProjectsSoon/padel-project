const { Router } = require("express");
const matchesController = require("../controllers/matchesController")

const matchesRouter = Router();

matchesRouter.get("/", (req, res) => {
  res.render("index", { title: 'log your matches' });
});

matchesRouter.post('/', matchesController.createMatchPost);

module.exports = matchesRouter;