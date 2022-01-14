const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/connection");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

recordRoutes.route("/answers/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let objectId = new ObjectId()
  let myobj = {
    _id: objectId,
    answers: req.body.answerSet,
    surveyId: req.body.surveyId
  };
  db_connect.collection("answers").insertOne(myobj, function (err, res) {
    if (err) throw err;
    let theId = myobj._id
    response.send(theId)
  });
});

// get matching documents in an array
recordRoutes.route("/answers/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  db_connect
    .collection("answers")
    .find({ surveyId: req.params.id })
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

//https://docs.mongodb.com/manual/tutorial/remove-documents/

recordRoutes.route("/answers/delete/:id").delete(function (req, response) {
  let db_connect = dbo.getDb();
  db_connect.collection('answers').deleteMany({ surveyId: req.params.id }, (err, res) => {
    if (err) throw err;
    response.send("Deletion successful")
  })
})


module.exports = recordRoutes;