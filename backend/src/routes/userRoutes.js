const express = require("express");
const controller = require("../controllers/usersController");
require("express-async-errors");

const router = express.Router();

router.get("/", controller.getCurrentUser);

// -> /user/signup
router.post("/signup", controller.createNewUser);
// -> /user/login
router.post("/login", controller.login);
module.exports = router;
// -> /user/logout
router.post("/logout", controller.logout);
module.exports = router;
