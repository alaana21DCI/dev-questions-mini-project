const User = require("../models/User");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

const fs = require("fs/promises");
const path = require("path");

/** @type {import("express").RequestHandler} */
exports.createNewUser = async (req, res, next) => {
  const userNew = new User(req.body);

  userNew.password = await bcrypt.hash(userNew.password, 10);
  userNew.token = crypto.randomBytes(64).toString("hex");

  // Bei der Registrirung soll der User optinal ein Profilbild hochladen können:
  if (req.file) {
    const filename = path.join(process.cwd(), req.file.path);
    const buffer = await fs.readFile(filename);
    const image = `data:${req.file.mimetype};base64,${buffer.toString(
      "base64"
    )}`;
    userNew.profileImage = image;
    await fs.unlink(filename);
  }

  await userNew.save();

  res.cookie("user-token", userNew.token, {
    maxAge: 9000000,
    sameSite: "strict",
    httpOnly: true,
  });

  res.status(200).send(userNew);
};

/** @type {import("express").RequestHandler} */
exports.login = async (req, res, next) => {
  const { email, password: pwPlain } = req.body;

  const userFound = await User.findOne().where("email").equals(email);

  if (!userFound) {
    const error = new Error("Email or Password not correct!!");
    error.status = 400;
    return next(error);
  }

  const isPasswordCorrect = await bcrypt.compare(pwPlain, userFound.password);

  if (!isPasswordCorrect) {
    const error = new Error("Email or Password not correct!!");
    error.status = 401;
    return next(error);
  }

  userFound.token = crypto.randomBytes(64).toString("hex");
  await userFound.save();

  res.cookie("user-token", userFound.token, {
    maxAge: 9000000,
    sameSite: "strict",
    httpOnly: true,
  });

  res.status(200).send(userFound);
};

/** @type {import("express").RequestHandler} */
exports.getCurrentUser = async (req, res, next) => {
  const token = req.cookies["user-token"];

  if (!token) {
    return res.status(200).json(null);
  }

  const curUser = await User.findOne().where("token").equals(token);

  return res.status(200).send(curUser);
};
/** @type {import("express").RequestHandler} */
exports.logout = async (req, res, next) => {
  const token = req.cookies["user-token"];

  const user = await User.findOne().where("token").equals(token);

  if (user) {
    user.token = "";
    await user.save();
  }

  res.cookie("user-token", "", {
    maxAge: 1,
    sameSite: "strict",
    httpOnly: true,
  });

  res.status(200).send();
};
