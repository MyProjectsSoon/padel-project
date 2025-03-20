const { Router } = require("express");
const express = require("express");
const matchesController = require("../controllers/matchesController")
const app = express();

const playersRouter = Router();

playersRouter.get('/', playersController.playerListGet);

  module.exports = playersRouter;