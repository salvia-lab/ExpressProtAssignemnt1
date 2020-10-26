//Salvia Rahman; Student ID; 301114183
let mongoose = require('mongoose');

// create a model class
let conatctModel = mongoose.Schema({
    name: String,
    number: String,
    email: String
},
{
    collection: "contact"
});

module.exports = mongoose.model('Contact', conatctModel);