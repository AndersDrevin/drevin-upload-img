var express = require('express');
var formidable = require('formidable');
const path = require('path')
const PORT = process.env.PORT || 5000

var app = express();

app.get('/', function (req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/image.png', function(req, res){
    res.sendFile(path.join(__dirname, 'image.png'));
    //res.sendFile(__dirname + '/uploads/image.png');
});

app.post('/', function (req, res){
    var form = new formidable.IncomingForm();

    form.parse(req);

    form.on('fileBegin', function (name, file){
        file.path = path.join(__dirname, 'image.png');
    });

    form.on('file', function (name, file){
        console.log('Uploaded image.png');
    });

    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))