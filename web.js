var fs = require('fs');
var express = require('express');
var app = express();
app.use(express.logger());

var maxBuffersize = 100;

var output = new String;
var rawoutput = new Buffer(maxBuffersize);

fs.readFile('index.html', rawoutput);
output = rawoutput.toString();              

app.get('/', function(request, response) {
//  response.send('Hello World 2!');
  response.send(output);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
