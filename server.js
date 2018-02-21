const express = require("express")
const exphbs = require("express-handlebars")
const bodyParser = require("body-parser")
const burgerRoutes = require('./controllers/burgers.js')

// Create an instance of the express app
const app = express()
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Specify the port
const port = process.env.PORT || 3000

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

// Set the routes
app.use(burgerRoutes)

// Initiate the listener
console.log("App listening on PORT: " + port)
app.listen(port)
