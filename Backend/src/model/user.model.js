const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "Username is taken"],
    required: [true, "Username is required"],
  },
  email: {
    type: String,
    unique: [true, "email exists"],
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    select: false
  },
  bio: {
    bio: String,
    profileImg: {
      type: String,
      default: "https://ik.imagekit.io/4gopneslv/img.jpeg",
    },
  },
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
