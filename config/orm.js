var connection = require("../config/connection.js")

var orm = {
	requestAllWhere: function(tbl, key, dat, theCallback) {
	    var queryString = "SELECT * FROM ?? WHERE ?? = ?;"
    	connection.query(queryString, [tbl, key, dat], function(err, rows) {
    		theCallback(err, rows)
    	})
    },
	updateWhere: function(tbl, key, dat, col, val, theCallback) {
	    var queryString = "UPDATE ?? SET ?? = ? WHERE ??=?;"
    	connection.query(queryString, [tbl, col, val, key, dat], function(err, rows) {
    		theCallback(err, rows)
    	})
    },
	deleteWhere: function(tbl, key, dat, theCallback) {
	    var queryString = "DELETE FROM ?? WHERE (??=?);"
    	connection.query(queryString, [tbl, key, dat], function(err, rows) {
    		theCallback(err, rows)
    	})
    },
	addRecord: function(tbl, namCol, namVal, desCol, desVal, lckCol, lckVal, devCol, devVal, theCallback) {
	    var queryString = "INSERT INTO ?? (??, ??, ??, ??) VALUES (?, ?, ?, ?)"
    	connection.query(queryString, [tbl, namCol, desCol, lckCol, devCol, namVal, desVal, lckVal, devVal], function(err, rows) {
    		theCallback(err, rows)
    	})
    }
}

module.exports = orm
