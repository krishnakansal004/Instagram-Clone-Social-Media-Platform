const userModel = require("../model/user.model");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function registerController(req, res) {
  const { email, username, password, bio, profileImg } = req.body;

  const isUserAlreadyRegister = await userModel.findOne({
    $or: [{ username }, { email }],
  });
  if (isUserAlreadyRegister) {
    return res.status(409).json({
      message: "User is already registered",
    });
  }

  const hash = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    username,
    email,
    bio: {
      bio:bio,
      profileImg: profileImg,
    },
    password: hash,
  });

  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );

  res.cookie("token", token);

  return res.status(201).json({
    message: "User registered",
    user: {
      username: user.username,
      email: user.email,
      bio: user.bio.bio,
      profileImg: user.bio.profileImg,
    },
  });
}

async function loginController(req, res) {
  const { email, username, password } = req.body;

  const user = await userModel.findOne({
    $or: [
      {
        username: username,
      },
      {
        email: email,
      },
    ],
  }).select("+password");

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({
      message: "Invalid password",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );

  res.cookie("token", token);

  return res.status(200).json({
    message: "User logged in Successfully",
    user: {
      username: user.username,
      email: user.email,
      bio: user.bio,
      profileImage: user.profileImage,
    },
  });
}

async function getMeController(req,res){
  const userId = req.user.id
  const user = await userModel.findById(userId)

  res.status(200).json({
    message:"User get me done",
    user:{
      username:user.username,
      email:user.email,
      bio:user.bio,
      profileImage:user.profileImage
    }
  })
}
module.exports = {
  registerController,
  loginController,
  getMeController
};
