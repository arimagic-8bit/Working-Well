const express = require("express");
const apiRouter = express.Router();

const Activity = require("./../models/activities");

// POST - creates activity in DB
apiRouter.post("/activity", function (req, res, next) {
  const { title, completion } = req.body;

  Activity.create({
    title,
    completion,
  })
    .then((activity) => {
      res.status(201).json(activity);
    })
    .catch((err) => res.status(500).json(err));
});

// GET - gets all activities
apiRouter.get("/activity", function (req, res, next) {
  Activity.find()
    .then((activities) => {
      res.status(200).json(activities);
    })
    .catch((err) => res.status(500).json(err));
});

//DELETE - delete all activities from DB

apiRouter.post("/activities/delete", (req, res, next) => {
  Activity.remove({})
    .then((activities) => {
      res.status(200).json(activities);
    })
    .catch((err) => res.status(500).json(err));
});

module.exports = apiRouter;
