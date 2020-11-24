const  http = require("http");
const path = require("path") ;
const fs = require("fs");



const sever =http.createServer();


sever.on('request',(req,res)=>{
    let pathname = req.url;
    pathname = pathname==='/'?'/index.html':pathname;
    let filename = path.join(__dirname,'public',pathname);
    fs.readFile(filename,(err,data)=>{
        if(err){
            res.statusCode=500;
            res.end('sever internal error.');
        }
        else{
            res.end(data)
        }
    })

})



sever.listen(8080,()=>{
    console.log("sever is runnning sat http://127.0.0.1:8080");
})
