var request = require('request');

//request returns a stream
//streams inherit from EventEmitter, so the 'on' function can be used
var s = request('http://www.pluralsight.com/');

s.on('data', function(chunk) {
    console.log(">>>Data>>> " + chunk);
});

s.on('end', function() {
    console.log(">>>Done!>>>");
});