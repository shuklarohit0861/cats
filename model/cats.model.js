const mongoose = require('mongoose');
const config = require('../config.json');

mongoose.connect(config.connectionString);


let Schema = mongoose.Schema;

let catSchema = new Schema({
         name: String,
         owner: String,
         age: Number
})

let Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;
