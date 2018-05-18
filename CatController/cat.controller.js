const express = require('express');
const router = express.Router();

const catService = require('../CatService/cat.service');

router.get("/allCats", allCats);
router.post('/newCat', addCat);



function allCats(req, res){
    catService.getAllCats()
    .then(function(cats){
        res.status(200).send({
            data: cats
        })
    }).catch(function(err){
        res.status(400).send(err);
    })
}

function addCat(req, res){
    catService.addNewCat(req.body.name, req.body.owner, req.body.age)
    .then(function(cat){
        res.status(200).send({
            data:cat
        })
    }).catch(function(err){
        res.status(400).send(err);
    })
}

module.exports= router;

