const express = require("express");
const router = express.Router();
const burgers = require('../models/burger.js')

router.get("/", function(req, res) {
  console.log("Rendering Burger Page")
  burgers.getReady(function(err, readyRows){
    if (err) { return res.status(500).end(); }
    burgers.getEaten(function(err, eatenRows){
      if (err) { return res.status(500).end(); }
      res.render("index", {ready: readyRows, eaten: eatenRows})
    })
  })
})

router.post("/api/devour", function(req, res) {
  var id = parseInt(req.body.id)
  if (isNaN(id)) { return res.status(500).end(); }
  console.log("Devouring Burger #" + id)
  burgers.devour(id, function(err, ok) {
    if ((err) || (ok.changedRows != 1)) { return res.status(500).end(); }
    res.sendStatus(200)
  })
})

router.post("/api/grill", function(req, res) {
  var id = parseInt(req.body.id)
  if (isNaN(id)) { return res.status(500).end(); }
  console.log("Grilling Burger #" + id)
  burgers.grill(id, function(err, ok) {
    if ((err) || (ok.changedRows != 1)) { return res.status(500).end(); }
    res.sendStatus(200)
  })
})

router.post("/api/trash", function(req, res) {
  var id = parseInt(req.body.id)
  if (isNaN(id)) { return res.status(500).end(); }
  console.log("Trashing Burger #" + id)
  burgers.trash(id, function(err, ok) {
    if ((err) || (ok.affectedRows != 1)) { return res.status(500).end(); }
    res.sendStatus(200)
  })
})

router.post("/api/newburger", function(req, res) {
  console.log("Adding New Burger: " + JSON.stringify(req.body))
  burgers.add(req.body.name, req.body.description, function(err, ok) {
    if ((err) || (ok.affectedRows != 1)) { return res.status(500).end(); }
    res.sendStatus(200)
  })
})

module.exports = router;