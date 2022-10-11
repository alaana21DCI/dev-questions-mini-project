const { body } = require("express-validator");
const validator = require("../middlewares/errorsValidator");

exports.signup = [
  body("email").isEmail().withMessage("invalid Email!"),
  body("password").isLength({ min: 4 }).withMessage("invalid Password! "),
  body("name").exists().trim().withMessage(" Name must not be empty!"),
  validator,
];

exports.login = [
  body("email").isEmail().withMessage("invalid Email!"),
  body("password").isLength({ min: 4 }).withMessage("invalid Password!"),
  validator,
];

exports.update = [
  body("name").exists().trim().withMessage("Input Field couldn't be empty"),
  validator,
];
