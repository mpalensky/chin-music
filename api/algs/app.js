var express = require('express');
 
var app = express();
 
app.get('/algs', function(req, res) {
    res.send({result: 'TBD'});
});
 
app.listen(3000);
console.log('Listening on port 3000...');