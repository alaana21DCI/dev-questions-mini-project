const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  token: String,
  profileImage: String,
  // answers: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Answer" }],
  // questions: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Question" }],
});

//Bei Rückgabe von Usern als JSON nur name und email zurückgeben.(papulaten)

// userSchema.methods.toJSON = function () {
//   const user = this;
//   const result = {
//     name: user.name,
//     email: user.email,
//     profileImage: user.profileImage,
//   };
//   return result;
// };
module.exports = mongoose.model("User", userSchema, "users");
