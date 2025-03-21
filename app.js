const express = require("express");
const playersRouter = require("./routes/playersRouter");
const matchesRouter = require("./routes/matchesRouter");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/", matchesRouter);
app.use("/players", playersRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`));