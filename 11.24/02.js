const http  =require("http");
const url = require("url");


const sever =http.createServer()




sever.on('request',(req,res)=>{

    let {query}=url.parse(req.url,true);
    console.log(query.id);
})


sever.listen(8080,()=>{


    console.log('sever is running at http://127.0.0.1:8080');
})