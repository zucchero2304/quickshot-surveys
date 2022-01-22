const express = require("express")
const router = express.Router()
const dbo = require("../db/connection")

const ObjectId = require("mongodb").ObjectId

//6-char code
const generateCode = () => {
    let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    let code = []
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * charset.length)
        code.push(charset.charAt(index))
    }
    return code.join("").toString()
}

router.route("/surveyCodes/:id").get(function (req, res) {
    let db_connect = dbo.getDb();
    let myquery = { code: req.params.id }
    db_connect
        .collection("surveyCodes")
        .findOne(myquery, function (err, result) {
            if (err) throw err
            res.json(result)
        });
});

router.route("/surveyCodes/add").post(function (req, response) {
    let db_connect = dbo.getDb()
    let myobj = {
        _id: new ObjectId(),
        code: generateCode(),
        surveyId: req.body[0]
    };
    db_connect.collection("surveyCodes").insertOne(myobj, function (err, res) {
        if (err) throw err
        let code = myobj.code
        response.send(code)
    })
})

module.exports = router