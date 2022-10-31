const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cookieParser = require("cookie-parser");

const userRouter = require("./src/routes/userRoutes");
const questionsRouter = require("./src/routes/questionsRoutes");
const answersRouter = require("./src/routes/answresRoutes");

const { DB_URL, DB_PORT, DB_NAME, PORT } = process.env;

mongoose.connect(`mongodb://${DB_URL}:${DB_PORT}/${DB_NAME}`);

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.static(require("path").join(__dirname, "build")));



app.use("/user", userRouter);
app.use("/questions", questionsRouter);
app.use("/answers", answersRouter);

app.post("/drop-database", async (req, res, next) => {
  await mongoose.connection.db.dropDatabase();
  res.status(200).send("database dropt!");
});
app.use((req, res, next) => {
  const error = new Error(" ROUTE NOT FOUND !!");
  error.status = 404;
  next(error);
});

// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
  res.status(error.status || 500).send({
    error: error.message,
  });
});

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
