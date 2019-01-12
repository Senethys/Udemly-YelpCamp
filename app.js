//Start the app with $ node app.js

//Dependencies:
// express - framework
// ejs for - embedded javascript
// body-parser - to take data from form elements,



//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

//Enable to skip .ejs extensions wwriting
app.set("view engine", "ejs");

//Allow express to use partials
app.use(express.static('public'));

//Allow nested objects.
app.use(bodyParser.urlencoded({ extended: true }));

//Dummy data
var camps = [
    {name: "Salmon Creek", image: "https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104491f7c279a0efb2bd_340.jpg"},
    {name: "Balls Mountain", image: "https://pixabay.com/get/e834b5062cf4033ed1584d05fb1d4e97e07ee3d21cac104491f7c279a0efb2bd_340.jpg"},
];

//Home page
app.get("/", function(req, res) {
    res.render("home");
});

//View the camps in the database
app.get("/campgrounds", function(req, res) {
    res.render("campgrounds", {campgrounds: camps});
});

//View the camps in the database
app.get("/newCamp", function(req, res) {
    res.render("newCamp");
});

//Home page
app.post("/campgrounds", function(req, res) {
    var name = req.body.name;
    var img = req.body.image;
    camps.push({name: name, image:img});
    res.redirect("/campgrounds");
});



//Start listening for incommong calls.
app.get("*", function(req, res) {
    res.send("<h1>404</h1>");
});


//Start listetning for incoming requests. 
app.listen(process.env.PORT, process.env.IP);