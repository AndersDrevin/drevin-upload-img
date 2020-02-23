var express = require('express');
var formidable = require('formidable');
const path = require('path')
const PORT = process.env.PORT || 5000

var app = express();

app.get('/', function (req, res){
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/image.png', function(req, res){
    res.sendFile(path.join(__dirname, 'image.png'));
    //res.sendFile(__dirname + '/uploads/image.png');
});

app.post('/', function (req, res){

    try{
        console.log("LEvel 1");
        var form = new formidable.IncomingForm();
        console.log("LEvel 2");

        form.parse(req);
        console.log("LEvel 3");

        form.on('fileBegin', function (name, file){
            file.path = path.join(__dirname, 'image.png');
        });
        console.log("LEvel 4");

        form.on('file', function (name, file){
            console.log('Uploaded image.png');
            console.log("LEvel 5");
        });

    }catch(ex){
        console.log("Det Sket sig", ex);
    }

    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))