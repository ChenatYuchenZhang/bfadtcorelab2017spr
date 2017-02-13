//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
const PORT=8080;

//Create a server
var server = http.createServer(handleRequest);

//create a counting variables
var num = 0;

//We need a function which handles requests and send response
// question: why did we create a function for server when there isn't even a server yet
function handleRequest(request, response){
    num += 1; // you can also write num = num +1, num++
    console.log(num);
    response.end('It Works!! Path Hit: ' + request.url);
}

//Lets start our server
server.listen(PORT, function(){
    // This line of code writes out a response to our terminal
    console.log("Server listening on: http://localhost:%s", PORT);
    console.log("Amount of requestion and responde on this server", num);
});


// this code is from https://blog.xervo.io/build-your-first-http-server-in-nodejs
