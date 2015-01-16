 var log = 0;
var fs = require('fs');
var base64data = "";
var randomstring = require("randomstring");
var n = randomstring.generate();

var buff = new Buffer(base64data,'base64');
console.log(base64data);

var stream = fs.createWriteStream('./data/'+n+'.data');
stream.write(buff);
stream.on("end", function() {
  stream.end();
});


