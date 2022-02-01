const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");

// Register Controller

const registerController = (req, res, next) => {
  //   let user = new User({
  //     email: req.body.email,
  //     password,
  //   });

  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      res.json({
        error: err,
      });
    }
    // res.json({
    //   hash,
    //   original: req.body.password,
    // });
    let user = new User({
      email: req.body.email,
      password: hash,
    });

    user
      .save()
      .then((result) => {
        res.status(201).json({
          message: "Uer Created Successfully",
          suer: result,
        });
      })
      .catch((error) => {
        res.jason({
          error,
        });
      });
  });
};

// Login Controller

const loginConroller = (req, res, next) => {
  let email = req.body.email;
  let password = req.body.password;

  User.findOne({ email }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          res.json({
            message: "Error Occured",
          });
        }
        if (result) {
          let token = jwt.sign({ email: user.email, _id: user._id }, "SECRET", {
            expiresIn: "2h",
          });
          res.json({
            message: "Login Successfull",
            token,
          });
        } else {
          res.json({
            message: "login Faild Password not Match",
          });
        }
      });
    } else {
      res.json({
        message: "User Not Fond",
      });
    }
  });
};

// Get User Controller

const getAlluer = (req, res, next) => {
  User.find()
    .then((users) => {
      res.json({
        users,
      });
    })
    .catch((error) => {
      res.json({
        error,
      });
    });
};

module.exports = {
  registerController,
  getAlluer,
  loginConroller,
};
