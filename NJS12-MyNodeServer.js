const myhttp = require("http");
const server = myhttp.createServer((req,res)=>
{
    res.end("Hello from server side : ALL");
});
server.listen(9000,"127.0.0.1",()=>{
    console.log("Listening on port 9000: All");
});


/*
>npm install -g nodemon
>nodemon NJS12-MyNodeServer.js
http://localhost:9000/
*/