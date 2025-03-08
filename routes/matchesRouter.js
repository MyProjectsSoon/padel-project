const { Router } = require("express");
const express = require("express");
const app = express();

const matchesRouter = Router();

matchesRouter.get('/', matchesController);

  module.exports = matchesRouter;