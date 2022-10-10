const Question = require("../models/Question");

// 1. createQuestion
/** @type {import("express").RequestHandler} */
exports.createNewQuestion = async (req, res, next) => {
  const question = new Question(req.body);
  question.user = req.user._id;
  await question.save();
  res.status(200).send(question);
};

// 2. getQuestion:
/** @type {import("express").RequestHandler} */
exports.getQuestionById = async (req, res, next) => {
  const id = req.params.id;
  //1- papulate name und avatar vom User weil im DB es gibt ref :id vom user
  //2- papulate user und description vom answers weil im DB es gibt ref :id vom user
  const question = await Question.findById(id)
    .populate("user", "name profileImage")
    .populate("answers", "user description");
  await Promise.all(
    question.answers.map(async (answer) => {
      await answer.populate("user", "name profileImage");
    })
  );
  if (!question) {
    const error = new Error("This Question-ID is unknown");
    error.status = 400;
    return next(error);
  }
  res.status(200).send(question);
};

// 3. getAllQuestions:
/** @type {import("express").RequestHandler} */
exports.getAllQuestions = async (req, res, next) => {
  const category = req.query.category;
  const search = req.query.search;

  let dbQuery = Question.find();

  if (category) {
    dbQuery = dbQuery.where("category").equals(category);
  }
  if (search) {
    dbQuery = dbQuery.or([
      {
        title: { $regex: search, $options: "i" },
      },
      {
        description: { $regex: search, $options: "i" },
      },
    ]);
  }
  const questions = await dbQuery.populate("user", "name profileImage");

  res.status(200).send(questions);
};
