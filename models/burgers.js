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

  update: (col, value, id, cb) => {
    orm.updateOne("burgers", col, value, id, (res) => {
      cb(res);
    });
  },

  delete: (id, cb) => {
    orm.deleteOne("burgers", id, (res) => {
      cb(res);
    });
  }
};

module.exports = burger;