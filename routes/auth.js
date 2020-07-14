const express = require('express');
const authRouter = express.Router();

const createError = require('http-errors');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const User = require('./../models/user');

// HELPER FUNCTIONS
const {
  isLoggedIn,
  isNotLoggedIn,
  validationLogin
} = require('./../helpers/middlewares');

// POST - checks if user hasn't a cookie, if user info exist
// and creates new user on DB

authRouter.post('/signup', isNotLoggedIn, validationLogin, (req, res, next) => {
  const {
    username,
    password
  } = req.body;

  User.findOne({
      username
    })
    .then((user) => {
      // username exist?
      if (user) {
        return next(createError(400));
      } else {

        // encrypt user password 
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashPass = bcrypt.hashSync(password, salt);

        User.create({
            username,
            password: hashPass
          })
          .then((newUser) => {

            // keep the passwors as ***
            newUser.password = '****';

            // saves new user in session
            req.session.currentUser = newUser;

            res.status(201).json(newUser);
          })
          .catch((err) => next(createError(err)));
      }
    })
    .catch((err) => next(createError(err)));
})

module.exports = authRouter;