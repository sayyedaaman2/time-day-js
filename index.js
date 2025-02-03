const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath = req.url === '/' ? 'index.html' : req.url;
    filePath = path.join(__dirname, "public", filePath);

    const extname = path.extname(filePath);
    let contentType = 'text/html';

    switch (extname) {
        case '.css': contentType = 'text/css'; break;
        case '.js': case '.mjs': contentType = 'text/javascript'; break;
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end("<h1>404 - File Not Found</h1>");
        } else {
            res.writeHead(200, { "Content-Type": contentType });
            res.end(content, "utf-8");
        }
    });
});

<<<<<<< HEAD
const PORT = 3000;
server.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
=======
// Start Server 
const PORT =  process.env.PORT || 3000;
server.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})
>>>>>>> 3078cc8eafa9e5f4dd2f66a53fc222a66c53bde3
