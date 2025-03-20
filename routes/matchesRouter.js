const { Router } = require("express");
const express = require("express");
const matchesController = require("../controllers/matchesController")
const app = express();

const matchesRouter = Router();

matchesRouter.get('/', res.render("index", {title: 'Log your matches'}));
matchesRouter.post('/', matchesController.createMatchPost);

  module.exports = matchesRouter;