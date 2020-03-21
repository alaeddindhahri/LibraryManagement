const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load User Login Validation
const validateUserLoginInput = require("../../validation/userlogin");

//load User model
const User = require("../../models/Users");

// @route   POST api/User/register
// @desc    register User
// @access  Public
router.post("/register", (req, res) => {
  const newUser = new User({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  });
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      newUser
        .save()
        .then(User => res.json(User))
        .catch(err => console.log(err));
    });
  });
});

// @route   PUT api/User/update/:_id
// @desc    update User
// @access  Private
router.put("/update/:_id", (req, res) => {
  const updatedUser = new User({
    _id: req.params,
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  });
  console.log(updatedUser)
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(updatedUser.password, salt, (err, hash) => {
      if (err) throw err;
      updatedUser.password = hash;
      User.findOneAndUpdate(
        { _id: updatedUser._id },
        {
          $set: {
            username: updatedUser.username,
            password: updatedUser.password,
            email: updatedUser.email
          }
        }
      )
        .then(User => res.json(User))
        .catch(err => console.log(err));
    });
  });
});

// @route   POST api/User/login
// @desc    Login user / Return Token
// @access  Public
router.post("/login", (req, res) => {
  const { errors, isValid } = validateUserLoginInput(req.body);

  // Check Validation
  if (isValid) {
    return res.status(400).json(errors);
  }

  const username = req.body.username;
  const password = req.body.password;

  //find User by username
  User.findOne({ username }).then(User => {
    //check for username
    if (!User) {
      errors.username = "Username incorrect";
      return res.status(404).json(errors);
    }

    //check password
    bcrypt.compare(password, User.password).then(isMatch => {
      if (isMatch) {
        // User matched
        const payload = {
          id: User.id,
          username: User.username,
          password: User.password,
          email: User.email
        }; // create JWT Payload
        //sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        errors.password = "Password incorrect";
        return res.status(400).json(errors);
      }
    });
  });
});

// @route   POST api/User/current
// @desc    Return current User
// @access  Private
router.get(
  "/account",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};
    User.findOne({ _id: req.user.id })
      .then(User => {
        if (!User) {
          errors.noUser = "Not authorized";
          return res.status(404).json(errors);
        }
        res.json(User);
      })
      .catch(err => res.status(404).json(err));
  }
);

module.exports = router;