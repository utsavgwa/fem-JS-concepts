// how you create a new server.
const express = require("express");

const app = express();

// how you handle a new route. A route is how you handle the request when a user hits a particular URL
app.get("/", function(req, res) {
  res.end("Welcome to my site!");
});

app.get("/complement", function(req, res) {
  res.end("You look nice today");
});

app.listen(3000);
console.log("listening on http://localhost:3000");