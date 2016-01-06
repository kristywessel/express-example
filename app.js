/**
 * Created by KristyWessel on 1/6/16.
 */

console.log('Hello Express');

// You'll start to see these at the start of every app going forward
var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('public'));

// Structure will be app.METHOD(PATH, HANDLER)
// You will need an ajax call first, that's the ebb and flow - The request comes from the AJAX call
// the web page will hit the server and then it will GET some stuff....

app.get('/', function(request, response){
    // need to run npm install path --save before this piece
    response.sendFile(path.join(__dirname, '/public/views/index.html'));
});


// Having this many requests, you need both the METHOD and the PATH to match

app.post('/addUser', function(request, response){
    response.send('You made a POST request!');
});

// The request doesn't actually DO anything, it's just signifying the type of request that the following code will include

app.put('/updateUser', function(request, response){
    response.send('You made a PUT request');
});

app.delete('/removeUser', function(request, response){
    response.send('You made a DELETE request');
});

var server = app.listen(3000, function(){
    var port = server.address().port;

    console.log('Listening on port', port);
});

