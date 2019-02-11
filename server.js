const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
//create the express app
const app = express()
//create middleware t0 handle the serving the app
app.use("/", serveStatic ( path.join(_dirname, '/public')))
//serve index by default
app.get('/', function (req, res) {res.sendFile(_dirname + '/public/index.html')})
//creat default port to serve the app on
const port = process.env.PORT || 5000
app.listen(port)
console.log('Server started on port ' + port)
