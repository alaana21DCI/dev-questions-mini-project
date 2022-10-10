const express = require("express");
const controller = require("../controllers/userController");
require("express-async-errors");

const router = express.Router();

router.get("/", controller.getCurrentUser);

// -> /user/register
router.post("/register", controller.createNewUser);
// -> /user/login
router.post("/login", controller.login);
// -> /user/logout
router.post("/logout", controller.logout);
module.exports = router;
