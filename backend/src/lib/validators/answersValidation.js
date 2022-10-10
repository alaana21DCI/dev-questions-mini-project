const { body } = require("express-validator");
const validator = require("../middlewares/errorsValidator");

exports.createAnswer = [
  body("description").exists().withMessage("Your Answer is requierd"),
  body("question").exists().withMessage("We don't know about this Question! "),
  validator,
];
