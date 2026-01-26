// ทำการ import http module เพื่อสร้าง server
const http = require('http');
const hostname = 'localhost';
const port = 8000;

//กำหนดค่าเริ่มต้นของ server เมื่อเปิดใช้งาน เว็บผ่าน browser ที่ localhost:8000
const requireListener = function(req, res){
    res.writeHead(200);
    res.end('My first server');
}

// run server
const server = http.createServer(requireListener);
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});