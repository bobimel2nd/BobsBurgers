var connection = require("../config/connection.js")

var orm = {
	selectWhere: function(col, val, theCallback) {
	    var queryString = "SELECT * FROM burgers WHERE ?? = ?"
    	connection.query(queryString, [col, val], function(err, rows) {
    		theCallback(err, rows)
    	})
    },
	devourBurger: function(burgerID, theCallback) {
	    var queryString = "UPDATE burgers SET devoured = true WHERE id=?;"
    	connection.query(queryString, [burgerID], function(err, rows) {
    		theCallback(err, rows)
    	})
    },
	grillBurger: function(burgerID, theCallback) {
	    var queryString = "UPDATE burgers SET devoured = false WHERE id=?;"
    	connection.query(queryString, [burgerID], function(err, rows) {
    		theCallback(err, rows)
    	})
    },
	trashBurger: function(burgerID, theCallback) {
	    var queryString = "DELETE FROM burgers WHERE (id=?) AND (locked=false);"
    	connection.query(queryString, [burgerID], function(err, rows) {
    		theCallback(err, rows)
    	})
    },
	addBurger: function(burgerName, description, theCallback) {
	    var queryString = "INSERT INTO burgers (locked, burger_name, description) VALUES (0, ?, ?)"
    	connection.query(queryString, [burgerName, description], function(err, rows) {
    		theCallback(err, rows)
    	})
    }
}

module.exports = orm
