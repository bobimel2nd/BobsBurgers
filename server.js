var express = require("express")
var exphbs = require("express-handlebars")
var bodyParser = require("body-parser")
const path = require('path')
console.log(__dirname)

// Create an instance of the express app.
var app = express()
app.use(express.static(path.join(__dirname, '/public/')))
app.use(express.static(path.join(__dirname, '/public/assets/')))
app.use(express.static(path.join(__dirname, '/public/assets/css/')))
app.use(express.static(path.join(__dirname, '/public/assets/img/')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Specify the port.
var port = process.env.PORT || 3000

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

require("./routes/apiRoutes")(app)

// Initiate the listener.
console.log("App listening on PORT: " + var connection = mysql.createConnection(myRemoteHost);
)
app.listen(port)
