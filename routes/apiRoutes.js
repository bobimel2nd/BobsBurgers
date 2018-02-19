var orm = require("../config/orm.js");

module.exports = function(app) {

  app.get("/", function(req, res) {
    console.log("Rendering Burger Page")
    orm.selectWhere("devoured", "0", function(err, readyRows) {
      if (err) return renderErrorPage(res, err, 500, "Error getting Ready Burgers")
      console.log("found " + readyRows.length + " ready")
      orm.selectWhere("devoured", "1", function(err, eatenRows) {
        if (err) return renderErrorPage(res, err, 500, "Error getting Eaten Burgers")
        console.log("found " + eatenRows.length + " eaten")
        // res.status(200).json({ready: readyRows, eaten: eatenRows})
        res.render("index", {ready: readyRows, eaten: eatenRows})
      })
    })
  })

  app.post("/api/devour", function(req, res) {
    var id = parseInt(req.body.id)
    if (isNaN(id)) return res.sendStatus(500)
    console.log("Devouring Burger #" + id)
    orm.devourBurger(id, function(err, ok) {
      if ((err) || (ok.changedRows != 1)) return res.sendStatus(500)
      res.sendStatus(200)
    })
  })

  app.post("/api/grill", function(req, res) {
    var id = parseInt(req.body.id)
    if (isNaN(id)) return res.sendStatus(500)
    console.log("Grilling Burger #" + id)
    orm.grillBurger(id, function(err, ok) {
      if ((err) || (ok.changedRows != 1)) return res.sendStatus(500)
      res.sendStatus(200)
    })
  })

  app.post("/api/trash", function(req, res) {
    var id = parseInt(req.body.id)
    if (isNaN(id)) return res.sendStatus(500)
    console.log("Trashing Burger #" + id)
    orm.trashBurger(id, function(err, ok) {
      if ((err) || (ok.affectedRows != 1)) return res.sendStatus(500)
      res.sendStatus(200)
    })
  })

  app.post("/api/newburger", function(req, res) {
    console.dir(req.body)
    console.log("Adding New Burger: " + req.body.name)
    orm.addBurger(req.body.name, req.body.description, function(err, ok) {
      if ((err) || (ok.affectedRows != 1)) return res.sendStatus(500)
      res.sendStatus(200)
    })
  })
}
