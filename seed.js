var mongoose = require("mongoose");
var Camp = require("./models/campground");
var Comment = require("./models/comment");


var seedData = [
    
    {   
        name: "Base Camp",
        imagine: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKwq6xf8efNZh7HNP_yoQEPJedLqaf2J__fgH_FKTa5uT2GZvVdg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    
    {
        name: "Desert Mesa", 
        image: "https://farm6.staticflickr.com/5487/11519019346_f66401b6c1.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    
    {
    
        name: "Canyon Floor", 
        image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    
];
        

function seedDb(){
//1. Delte entries in db
//2. Adds a sed per loop
//3. Adds a comment to the seed

        Camp.remove({}, function(err) {
            if(err) {
                console.log(err);
            } else {
                console.log("Database Cleaned.");
                Comment.remove({}, function(err) {
                if(err){
                    console.log(err);
                }
                console.log("Removed Comments!");
                seedData.forEach(function(seed) {
                    Camp.create(seed, function(err, campdata) {
                    if(err) {
                        console.log("Add Camp.");
                    } else {
                        Comment.create({
                            user: "Whatevers",
                            text: "This is great! aSDASDASD"
                        }, function (err, createdComment) {
                            if(err) {
                                console.log(err);    
                            }
                            else {
                                campdata.comments.push(createdComment);
                                campdata.save();
                                console.log("Created comment");
                            }
                        });
                    }
                });
            });
        });
    }
    });
}

module.exports = seedDb;