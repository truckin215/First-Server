const http = require('http');
// creating server
const server = http.createServer(function(request, response) {
    response.writeHead(200, {'content-type': "text/html"});
    response.write("<!DOCTYPE html >" );
    response.write("<html>");
    response.write("<head>");
    response.write("<title> first server</title>");
    response.write("</head>");
    response.write("<body>");
    response.write("Hello VERO!!!!");
    response.write("</body>");
    response.write("</html>");
    response.end();
});
// setting port number
server.listen(3000);
// test to see if its working
console.log('hey dude your server is up and running on port 3000')