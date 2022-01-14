const express = require("express")
const app = express()
const cors = require("cors")
const path = require('path')
require("dotenv").config({ path: "./config/config.env" })
const port = process.env.PORT || 8080
app.use(cors())
app.use(express.json({ limit: '25mb' }))
app.use(require("./routes/survey"))
app.use(require("./routes/answers"))
app.use(require("./routes/images"))
app.use(require("./routes/recaptcha"))
app.use(require("./routes/surveyCodes"))

// get driver connection
const dbo = require("./db/connection")

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
})

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err)

  })
  console.log(`Server is running on port: ${port}`)
})