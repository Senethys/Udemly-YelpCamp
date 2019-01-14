var mongoose = require("mongoose");

//Schema
var campSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String 
});

//Model
var Camp = mongoose.model("Camp", campSchema);

module.exports = Camp;