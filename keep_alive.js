var http = require('http');

http.createServer(function (req, res) {
  res.write("Lively");
  res.end();
}).listen(8080);
