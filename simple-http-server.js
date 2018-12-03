console.log("app started")
const http = require("http")

var server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.end('<h1>Hello Node Js</h1>')
})

server.listen(3000, () => {
    console.log("server running on port 3000")
})

console.log("app running")