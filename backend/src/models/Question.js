const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, enum: ["HTML", "CSS", "JS"], required: true },
  user: { type: mongoose.SchemaTypes.ObjectId, ref: "User", required: true },
  answers: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Answer" }],
});
module.exports = mongoose.model("Question", questionSchema, "questions");
