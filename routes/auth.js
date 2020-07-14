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

// POST - checks if user hasn't a cookie, if user info exist,
// creates new user on DB and creates user session

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

// POST - checks if user is not log in and if user exist
// and creates user session

authRouter.post('/login', isNotLoggedIn, validationLogin, (req, res, next) => {
  const {
    username,
    password
  } = req.body;

  User.findOne({
      username
    })
    .then((user) => {
      if (!user) {
        return next(createError(404));
      } else {

        // compares if given password === to user password
        const passwordIsCorrect = bcrypt.compareSync(password, user.password);

        if (passwordIsCorrect) {
          user.password = "****";
          req.session.currentUser = user;

          res.status(200).json(user);
        }
      }
    })
    .catch(err => next(createError(err)));
})

// GET - checks if user is logged in and destroy session

authRouter.get('/logout', isLoggedIn, (req, res, next) => {
  req.session.destroy(err => {
    if (err) next(createError(err));
    else {
      res.status(204).send()
    }
  })
})

// GET - checks if user is logged in and gets user info

authRouter.get('/me', isLoggedIn, (req, res, next) => {
  const currentUserSession = req.session.currentUser;

  res.status(200).json(currentUserSession);
})

module.exports = authRouter;