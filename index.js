const http = require('http');
const fs = require('fs');
const path = require('path');

// Create Server 
const server = http.createServer((req,res)=>{
    let filePath  = req.url === '/' ? "index.html" : req.url;
    filePath = path.join(__dirname,"/public",filePath);

    // Get file extension

    const extname = path.extname(filePath);
    let contentType = 'text/html';


    switch(extname){
        case ".css":
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
    }
    // Read and serve the file
    fs.readFile(filePath,(err,content)=>{
        if(err){
            res.writeHead(404, {"Content-Type" : "text/html"});
            res.end("<h1>404 - File Not Found </h1>");

        }else{
            res.writeHead(200, {"Content-Type": contentType});
            res.end(content,"utf-8");
        }
    })
})

// Start Server 
const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:3000`)
})