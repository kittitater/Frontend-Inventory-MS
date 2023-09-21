// this is server handler

var finalhandler = require("finalhandler");
var http = require("http");
var serveStatic = require("serve-static");

// Serve up public/ftp folder
var serve = serveStatic("src", { index: ["dashboard.html", "dashboard.html"] });

// Create server
var server = http.createServer(function onRequest(req, res) {
  serve(req, res, finalhandler(req, res));
});

// Listen
server.listen(8080);