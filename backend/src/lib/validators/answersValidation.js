const { body } = require("express-validator");
const validator = require("../middlewares/errorsValidator");

exports.createAnswer = [
  body("description").exists().withMessage("Deine Antwort würde benötigt"),
  body("question").exists().withMessage("Diese Frage kennen wir Nicht!"),
  validator,
];
