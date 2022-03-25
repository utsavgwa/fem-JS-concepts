// how you create a new server.
const express = require("express");

const app = express();//run the function, you get app(one server)

// how you handle a new route. A route is how you handle the request when a user hits a particular URL
app.get("/", function(req, res) {
  res.end("Welcome to my site!");
});

app.get("/complement", function(req, res) { //another route
  res.end("You look nice today");
});

// so ESSENTIALLY, a web server is nothing more than lots and lots of routes

app.listen(3000);
console.log("listening on http://localhost:3000");