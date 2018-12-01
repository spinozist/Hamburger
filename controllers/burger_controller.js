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

router.get("/api/burgers", (req,res)=> {
    burger.all((data) => {
        res.json(data)
    })
});

router.get("/api/burgers/:id", (req, res)=>{
    burger.all
})

router.post("/api/burgers", (req, res) => {
    burger.create(req.body.burger_name, (result) => {
        // Send back the ID of the new quote
        res.json({ id: result.id });
    });
});

router.put("/api/burgers/:id&:devoured", (req, res) => {
    
    burger.update("devoured", req.params.devoured, req.params.id, (result) => {
            

            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

router.delete("/api/burgers/:id", (req,res) => {
    var id = req.params.id;
    
    burger.delete(id, (result) => {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();    });
});

module.exports = router;


