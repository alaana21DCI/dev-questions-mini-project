const express = require("express");
require("express-async-errors");

const controller = require("../controllers/answersController");
const validator = require("../lib/validators/answersValidation");
const router = express.Router();

// -> /answers
router.post("/", validator.createAnswer, controller.createNewAnswer);
module.exports = router;
