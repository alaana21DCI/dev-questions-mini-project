const express = require("express");
require("express-async-errors");

const controller = require("../controllers/questionsController");
const validator = require("../lib/validators/questionsValidation");
const auth = require("../lib/middlewares/auth");

const router = express.Router();

// -> /questions
router
  .route("/")
  .get(controller.getAllQuestions)
  .post(auth, validator.createQuestion, controller.createNewQuestion);

// -> /questions/6307832565f17206daee5084
router.get("/:id", controller.getQuestionById);

module.exports = router;
