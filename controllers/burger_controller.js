var express = require("express");

var router = express.Router();

var burger = require("../models/burgers");

router.get("/", (req, res) => {
    burger.all((data) => {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.create(req.body.burger_name, (result) => {
        // Send back the ID of the new quote
        res.json({ id: result.id });
    });
});

router.put("/api/burgers/:id", (req, res) => {

    burger.update(req.body.burger_name, req.params.id, (result) => {
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

module.exports = router;


