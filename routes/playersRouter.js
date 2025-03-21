const { Router } = require("express");
const express = require("express");
const playersController = require("../controllers/playersController")
const app = express();

const playersRouter = Router();

playersRouter.get('/', playersController.playerListGet);

  module.exports = playersRouter;