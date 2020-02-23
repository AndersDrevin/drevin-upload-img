var express = require('express');
var formidable = require('formidable');
var util = require('util');
const path = require('path')
const PORT = process.env.PORT || 5000

var app = express();

app.get('/', function (req, res){
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/uploads/image.png', function(req, res){
    res.sendFile(path.join(__dirname, 'uploads/image.png'));
    //res.sendFile(__dirname + '/uploads/image.png');
});

app.post('/', function (req, res){

    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        res.writeHead(200, {'content-type': 'text/plain'});
        res.write('received upload:\n\n');
        res.end(util.inspect({fields: fields, files: files}));
      });

      return;

});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))