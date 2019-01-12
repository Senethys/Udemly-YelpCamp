//Start the app with $ node app.js

//Dependencies:
// express
// request
// body-parser
// ejs 


//Get express 
var app = require("express")();

app.set("view engine", "ejs");

//Dummy data
var camps = [
    {name: "Salmon Creek", image: "https://preview.redd.it/n6ckbdtw9l921.jpg?width=640&crop=smart&auto=webp&s=fb6301cc90d0da075b9364fc08907cc37648a32c"},
    {name: "Balls Mountain", image: "https://preview.redd.it/n6ckbdtw9l921.jpg?width=640&crop=smart&auto=webp&s=fb6301cc90d0da075b9364fc08907cc37648a32c"},
];

//Home page
app.get("/", function(req, res) {
    res.render("home");
});

//Home page
app.get("/campgrounds", function(req, res) {
    res.render("campgrounds", {campgrounds: camps});
});

//Start listening for incommong calls.
app.get("*", function(req, res) {
    res.send("<h1>404</h1>");
});


//Start listetning for incoming requests. 
app.listen(process.env.PORT, process.env.IP);