const express = require("express");
require("express-async-errors");

const controller = require("../controllers/answersController");
const router = express.Router();

// -> /answers
router.post("/", controller.createNewAnswer);
module.exports = router;
