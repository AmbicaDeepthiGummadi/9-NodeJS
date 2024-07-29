const https=require("https");
//https://jsonplaceholder.typicode.com/todos/1 ===>
//PS D:\UI-DEVELOPMENT\9-NodeJS> node NJS14-Fetch-URL.js
/*{ userId: 1, id: 1, title: 'delectus aut autem', completed: false }
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}*/
https.get("https://jsonplaceholder.typicode.com/todos/1",(resp)=>{
    let data='';
    //A chunk of data has been received.
    resp.on('data',(chunk)=>{
        data+=chunk;
    });
    //The whole response has been received.print out the result.
    resp.on('end',()=>{
        console.log(JSON.parse(data));
        console.log(data);
    });
}).on("error",(err)=>{
    console.log("Error : "+err.message);
});