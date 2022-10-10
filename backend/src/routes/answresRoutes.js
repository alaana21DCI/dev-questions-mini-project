const express = require("express");
require("express-async-errors");

const router = express.Router();
const controller = require("../controllers/answersController");

// -> /answers
router.post("/", controller.createNewAnswer);
module.exports = router;
