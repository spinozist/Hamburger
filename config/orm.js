var connection = require("./connection.js");

var orm = {

    selectAll: (table, cb) => {
        var queryString = "SELECT * FROM ??;";
        connection.query(queryString, [table], (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    insertOne: (table, burgerName, cb) => {
        var queryString = "INSERT INTO ?? (burger_name) VALUES (?);";
        connection.query(queryString, [table, burgerName], (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    updateOne: (tableInput, burgerName, id, cb) => {
        var queryString = "UPDATE ?? SET burger_name = ? WHERE id = ?;";
        connection.query(
            queryString, [tableInput, burgerName, id], (err, result) => {
                if (err) {
                    throw err;
                }
                cb(result);
            }
        );
    }
};

module.exports = orm;