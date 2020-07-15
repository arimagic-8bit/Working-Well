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

// GET - gives activity info
apiRouter.get('/activity', function (req, res, next) {
  Activity.find()
    .then((activities) => {
      res.status(200).json(activities);
    })
    .catch(err => res.status(500).json(err))
});

// UPDATE - edit an activity info
apiRouter.put('/activity/:id', (req, res, next) => {
  const {
    title,
    completion,
    rest
  } = req.body;

  const activityId = req.params.id;

  Activity.findByIdAndUpdate({
      _id: activityId
    }, {
      title,
      completion,
      rest
    }, {
      new: true
    })
    .then((updateActivity) => {
      res.status(200).json(updateActivity)
    })
    .catch(err => res.status(500).json(err))
});

// DELETE - delete one activity from DB

apiRouter.post('/activity/:id/delete', (req, res, next) => {
  const activityId = req.params.id;

  Activity.findByIdAndRemove({
      _id: activityId
    })
    .then((removed) => {
      res.status(200).json(removed);
    })
    .catch(err => res.status(500).json(err))
});

// DELETE - delete all activities from DB

apiRouter.post('/activities/delete', (req, res, next) => {

  Activity.remove({})
    .then((activities) => {
      res.status(200).json(activities);
    })
    .catch(err => res.status(500).json(err))
});

module.exports = apiRouter;