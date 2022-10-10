const express = require("express");
const controller = require("../controllers/questionsController");
require("express-async-errors");
const router = express.Router();

// -> /questions
router
  .route("/")
  .get(controller.getAllQuestions)
  .post(controller.createNewQuestion);

// -> /questions/6307832565f17206daee5084
router.get("/:id", controller.getQuestionById);

module.exports = router;
