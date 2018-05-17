var express = require('express');
var config = require('./server/config/config');
var async=require('async');
var Brands=['Gap', 'Banana Republic', 'Boss', 'Hugo Boss', 'Taylor', 'Rebecca Taylor'];
var Colthes=['Denim', 'Pants', 'Sweaters', 'Skirts', 'Dresses'];

var app = express();

app.set('port', process.env.PORT || config.port);
app.use(express.static('client', {index: "/views/index.html"}));

app.get('/searchText/:input',function (req,res) {
   var input=req.params.input;
   for(var i=0;i<Brands.length;i++){
    var brand = new RegExp(Brands[i], 'ig');
        input =   input.replace(brand,"<b>"+Brands[i]+"</b>");
}
for(var i=0;i<Colthes.length;i++){
   var cloth = new RegExp(Colthes[i], 'ig');
   input =   input.replace(cloth,"<i>"+Colthes[i]+"</i>");
}
   
   res.send(input);
});

app.use(function (req, res, next) {
    res.sendFile(__dirname + '/client/views/index.html');
});

var server = app.listen(app.get('port'), function () {
    console.log('Listening on port ' + server.address().port);
});