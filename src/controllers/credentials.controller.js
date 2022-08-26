import User from "../models/User.js";

export const createUser = async (req, res) => {
  console.log("~ Creating a new user...");

  const newUser = new User({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  await newUser.save();

  console.log("~ Saved user " + req.body.username);
  res.redirect("/home");
};


export const performLogin = async (req, res) => {
  console.log("~ Try to authenticate with credentials");
  const userFound = await User.findOne({
    Email: req.body.Email,
    password: req.body.password,
  });

  if (userFound) {
    console.log("~ >> " + userFound);
    res.redirect("/home");
  } else {
    console.log("~ << None");
    res.sendStatus(404);
  }
};

