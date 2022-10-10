const express = require("express");
require("express-async-errors");

const controller = require("../controllers/answersController");
const validator = require("../lib/validators/answersValidation");
const auth = require("../lib/middlewares/auth");
const router = express.Router();

// -> /answers
router.post("/", auth, validator.createAnswer, controller.createNewAnswer);
module.exports = router;
