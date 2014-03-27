var fs = require('fs');
var express = require('express');
var app = express();
app.use(express.logger());

var output = "";

output = fs.readFileSync('index.html','utf8', function (err, data)  {
  var output = "";
  if (err) throw err;
  console.log(data);
  return data;
  });

app.get('/', function(request, response) {
  response.send(output);
});


var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
