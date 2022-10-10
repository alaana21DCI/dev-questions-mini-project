const mongoose = require("mongoose");

const answerSchema = mongoose.Schema({
  description: { type: String, required: true },
  user: { type: mongoose.SchemaTypes.ObjectId, ref: "User", required: true },
  question: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Question",
    required: true,
  },
});
module.exports = mongoose.model("Answer", answerSchema, "answers");
