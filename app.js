const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParse = require('body-parser');
const colors = require('colors');


app = express();
app.use(cors());
app.use(logger('dev'));

app.use(bodyParse.json());

app.use(bodyParse.urlencoded({extended: false}));

app.use('/api', require('./CatController/cat.controller'));
const port = 3000;

app.listen(port, function(){
    console.log("server is running on port ".green + port);
})
