// library inside of node for handling connections
const http = require("http");

//created server function, that runs every single time
const server = http.createServer(function(req, res) {
  console.log(`user visited ${req.url}`);
  res.end("hello!");
});
// localhost is an alias for your own computer
// :3000 is the port to connect on 
console.log("listening on http://localhost:3000");
server.listen(3000);