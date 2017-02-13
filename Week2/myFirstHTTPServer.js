//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
const PORT=1200;

//Create a server
var server = http.createServer(handleRequest);


//We need a function which handles requests and send response
function handleRequest(request, response){
    response.end('It Works!! Path Hit: ' + request.url);
}

//Lets start our server
server.listen(PORT, function(){
    // This line of code writes out a response to our terminal
    console.log("Server listening on: http://localhost:%s", PORT);
});


// this code is from https://blog.xervo.io/build-your-first-http-server-in-nodejs
