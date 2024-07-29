//Require the http module
var http = require("http");
//Require your custom module
var dt=require("./myModule");
//create an HTTP server
http.createServer(function(req,res){
    //set the response header
    res.writeHead(200,{"Content-Type":"text/html"});
    //use the custom module to get time and date
    res.write("The date and time currently is:"+dt.myDateTime());
    //End the response
    res.end();
}).listen(9000); //Server listens on port 8000