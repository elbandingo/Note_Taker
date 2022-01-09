//require express, assign it to APP, and assign a port
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

//define the middleware needed
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("./public/"));

//require the routes for the server
require("./routes/api")(app);
require("./routes/html")(app);

//start listening on port
app.listen(PORT , () => {
    console.log(`listening on port ${PORT}`);
})