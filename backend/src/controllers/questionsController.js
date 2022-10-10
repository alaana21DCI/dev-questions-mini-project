const Question = require("../models/Question");

// 1. createQuestion
/** @type {import("express").RequestHandler} */
exports.createNewQuestion = async (req, res, next) => {
  const question = new Question(req.body);
  question.user = req.user._id;
  await question.save();
  res.status(200).send(question);
};
// 2. getAllQuestions:
/** @type {import("express").RequestHandler} */
exports.getAllQuestions = (req, res, next) => {
  throw new Error("not impliment!");
};
// 3. getQuestionById:
/** @type {import("express").RequestHandler} */
exports.getQuestionById = (req, res, next) => {
  throw new Error("not impliment!");
};
