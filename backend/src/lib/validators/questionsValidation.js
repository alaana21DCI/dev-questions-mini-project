const { body } = require("express-validator");
const validator = require("../middlewares/errorsValidator");

exports.createQuestion = [
  body("title").isLength({ min: 5 }).withMessage("WE NEED A STRONG TITLE!"),
  body("description")
    .isLength({ min: 5 })
    .withMessage("WRITE PLEASE MORE ABOUT YOUR QUESTION!"),
  body("category")
    .notEmpty()
    .isIn(["JS", "HTML", "CSS"])
    .withMessage("INVALID CATEGORY name"),
  validator,
];
