const http = require('http');

const server = http.createServer((req,res)=>{
    
    if(req.url = "/hello"){
        
        res.writeHead(200,"Application-Type:Text/HTML")
        res.end("hello geekster");
        console.log("Hello Geekster");
}
}).listen(3000)

