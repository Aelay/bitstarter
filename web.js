var fs = require('fs');
var express = require('express');
var app = express();
app.use(express.logger());

// var maxBuffersize = 1000;

var output = "";
// var rawoutput = new Buffer(maxBuffersize);

output = fs.readFileSync('index.html','utf8', function (err, data)  {
  var output = "";
  if (err) throw err;
  console.log(data);
  return data;
  });

//len = rawoutput.length-1;

/* I wanted to get rid of \n at the end by reading
 * length-1 bytes, but somehow, whatever number I
 * write as last argument for .toString,
 * the result in output is always the same. */

//output = rawoutput.toString();
//console.log(output);

app.get('/', function(request, response) {
//  response.send('Hello World 2!');
  response.send(output);
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
