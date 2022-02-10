
var express = require('express');
var app = express();
var PORT = 3000;
 
// Without middleware

 
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
    res.redirect(3000, 'http://example.com')
});