const User = require("../../models/User");

/** @type {import("express").RequestHandler} */
module.exports = async (req, res, next) => {
  const token = req.cookies["user-token"];

  if (!token) {
    const error = new Error("you need to signup or login first");
    error.status = 401;
    return next(error);
  }

  const user = await User.findOne().where("token").equals(token);

  if (!user) {
    const error = new Error("your token is invalid!!!");
    error.status = 401;
    return next(error);
  }

  req.user = user;

  next();
};
