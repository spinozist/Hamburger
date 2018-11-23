var orm = require("../config/orm.js");

var burger = {
    
  all: (cb) => {
    orm.selectAll("burgers", (res) => {
      cb(res);
    });
  },

  create: (burgerName, cb) => {
    orm.insertOne("burgers", burgerName, (res) => {
      cb(res);
    });
  },

  update: (burgerName, id, cb) => {
    orm.updateOne("burgers", burgerName, id, (res) => {
      cb(res);
    });
  }
};

module.exports = burger;