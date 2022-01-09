//require path functionality for get requests for displaying pages
const path = require("path");

//export a function to handle get requests to display HTML pages
module.exports = function(app) {
    app.get("/notes", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    app.get("*", function(req,res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
}