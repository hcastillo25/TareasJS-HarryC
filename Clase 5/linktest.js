
var express = require('express');
var app = express();
var PORT = 3000;
 
// Without middleware
app.get('/', function(req, res){
    res.links({
        next: 'http://demo.com?page=2',
        middle: 'http://demo.com?page=4',
        last: 'http://demo.com?page=6'
    });
 
    console.log(res.get('link'));
});
 
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});