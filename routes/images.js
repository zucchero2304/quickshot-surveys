const express = require("express")
const router = express.Router()

const AWS = require('aws-sdk')

const s3 = new AWS.S3({
    accessKeyId: process.env.S3_ID,
    secretAccessKey: process.env.S3_SECRET
});

router.route("/images/:id").get(function (req, res) {
    const params = {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: req.params.id
    }

    s3.getObject(params, (err, data) => {
        if (err) console.log("getObject error: " + err)
        else {
            //https://stackoverflow.com/questions/36942442/how-to-get-response-from-s3-getobject-in-node-js
            res.send(data.Body.toString('utf-8'))
        }
    })
})

router.route("/images/add").post(function (req, res) {
    uploadFile(req.body[0], req.body[1])
    res.send("response ok!")
})

const uploadFile = (file, name) => {
    // S3 upload parameters
    const params = {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: name, // filename in S3
        Body: file
    };

    // Uploading files to the bucket
    s3.upload(params, function (err, data) {
        if (err) {
            throw err
        }
        console.log(`File uploaded successfully. ${data.Location}`)
    });
};

router.route("/images/delete/:id").delete(function (req, res) {
    let objects = []
    let surveyId = req.params.id
    req.body.forEach((imageId) => {
        let objectData = {
            Key: surveyId + ':' + imageId
        }
        console.log(objectData)
        objects.push(objectData)
    })

    const params = {
        Bucket: process.env.S3_BUCKET_NAME,
        Delete: {
            Objects: objects
        }
    }

    s3.deleteObjects(params, (err, data) => {
        if (err) console.log("delete object error: " + err)
        else {
            //https://stackoverflow.com/questions/36942442/how-to-get-response-from-s3-getobject-in-node-js
            res.send("OK")
        }
    })
})

module.exports = router