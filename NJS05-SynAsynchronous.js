const fs=require("fs");
const data=fs.readFileSync("myNewData.txt","utf-8");
console.log(data);
fs.readFile("info.txt","utf-8",(err,data)=>{
  console.log(data);
})