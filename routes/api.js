//require the database of notes as a variable
const notes = require("../db/db.json");

//export a function to set the get and post routes
module.exports = function(app) {
    //first a get request for the current notes data when going to /api/notes
    app.get("/api/notes/", (req,res) => {
        res.json(notes);
    });

    //set a post request to push the data to the array, and to json
    app.post("/api/notes/", (req,res) => {
        notes.push(req.body);
        res.json(true);
    });
    
}