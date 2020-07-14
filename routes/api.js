const express = require('express');
const apiRouter = express.Router();

const createError = require('http-errors');

const Activity = require('./../models/activities');


// POST - creates activity in DB
apiRouter.post('/activity', function (req, res, next) {
  const {
    title,
    completion,
    rest
  } = req.body;

  Activity.create({
      title,
      completion,
      rest
    })
    .then((activity) => {
      res.status(201).json(activity);
    })
    .catch(err => res.status(500).json(err));
});

module.exports = apiRouter;