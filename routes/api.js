//require the database of notes as a variable, and also FS for deleting and saving the new notes
const notes = require("../db/db.js");
const fs = require("fs");
const path = require("path");


//export a function to set the get and post routes
module.exports = function(app) {
    //first a get request for the current notes data when going to /api/notes
    app.get("/api/notes/", (req,res) => {
        res.json(notes);
    });

    //set a post request to push the data to the array, and to json
    app.post("/api/notes/", (req,res) => {
        //create a new ID where its value is determined by its place in the notes array
        req.body.id = notes.length.toString();
        notes.push(req.body);
        res.json(true);
    });

    //create a function that allows you to delete a note based on its ID
    function deleteNote(id,noteArr) {
        for (let i = 0; i <noteArr.length; i++) {
            let currentNote = noteArr[i];

            if (currentNote.id == id) {
                noteArr.splice(i,1);
                fs.writeFileSync(path.join(__dirname, '../db/db.js'),JSON.stringify(noteArr,null,2));
                break;
            }
        }
    }

    //create a route to delete the note and reload the notes
    app.delete("/api/notes/:id", (req,res) => {
        deleteNote(req.params.id, notes);
        res.json(true);
    });

}