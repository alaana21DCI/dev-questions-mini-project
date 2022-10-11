const express = require("express");
require("express-async-errors");
const controller = require("../controllers/userController");

const validator = require("../lib/validators/userValidator");
const auth = require("../lib/middlewares/auth");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const router = express.Router();

// -> /user
router.get("/", controller.getCurrentUser);
router.patch(
  "/",
  auth,
  upload.single("file"),
  validator.update,
  controller.updateUser
);

// -> /user/signup
router.post(
  "/signup",
  upload.single("file"),
  validator.signup,
  controller.createNewUser
);

// -> /user/login
router.post("/login", validator.login, controller.login);

// -> /user/logout
router.post("/logout", controller.logout);

module.exports = router;
