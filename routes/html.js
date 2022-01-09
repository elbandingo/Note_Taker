//require path functionality for get requests for displaying pages
const path = require("path");

//export a function to handle get requests to display HTML pages
module.exports = function(app) {
    //first, set up a get request, so the /notes button in the index.html, sends a get request to get the most current notes.html page
    app.get("/notes", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });
    
    //by default, set up the initial landing page of the application to index.html
    app.get("*", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
}