const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/connection");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// This section will help you get a single record by id
recordRoutes.route("/survey/:id").get(function (req, res) {
    let db_connect = dbo.getDb();
    let surveyId = new ObjectId(req.params.id)
    let myquery = { _id: surveyId };
    db_connect
        .collection("surveys")
        .findOne(myquery, function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

recordRoutes.route("/survey/add").post(function (req, response) {
    let db_connect = dbo.getDb();
    let objectId = new ObjectId()
    let myobj = {
        _id: objectId,
        title: req.body.title,
        description: req.body.description,
        questions: req.body.questions
    };
    db_connect.collection("surveys").insertOne(myobj, function (err, res) {
        if (err) throw err;
        let theId = myobj._id
        response.send(theId)
    });
});

recordRoutes.route("/survey/delete/:id").delete(function (req, response) {
    let db_connect = dbo.getDb();
    db_connect.collection('surveys').deleteOne({ _id: ObjectId(req.params.id) }, (err, res) => {
        if(err) throw err;
        response.send("Deletion successful")
    })
})

module.exports = recordRoutes;