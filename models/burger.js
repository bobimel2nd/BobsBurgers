var orm = require("../config/orm.js");

const burger = {
  getReady: function(theCallback) {
    orm.requestAllWhere("burgers","devoured", 0, theCallback)
  },

  getEaten: function(theCallback) {
    orm.requestAllWhere("burgers","devoured", 1, theCallback)
  },

  devour: function(id, theCallback) {
    orm.updateWhere("burgers", "id", id, "devoured", 1, theCallback)
  },

  grill: function(id, theCallback) {
    orm.updateWhere("burgers", "id", id, "devoured", 0, theCallback)
  },

  trash: function(id, theCallback) {
    orm.deleteWhere("burgers", "id", id, theCallback)
  },

  add: function(name, desc, theCallback) {
     orm.addRecord("burgers", "burger_name", name, "description", desc, "devoured", 0, "locked", 0, theCallback)
  }
}

module.exports = burger;