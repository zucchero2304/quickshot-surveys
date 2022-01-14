const express = require("express");
const router = express.Router();
const secretKey = process.env.CAPTCHA_SECRET_KEY
const axios = require('axios')

router.route("/verify-captcha").post(function (request, response) {
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${request.body[0]}`;
    //https://developers.google.com/recaptcha/docs/verify
    axios
        .post(url)
        .then((res) => {
            response.send(res.data.success)
        })
        .catch(() => {
            console.log("Captcha backend error")
        })
})

module.exports = router;