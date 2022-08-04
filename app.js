const http = require("http")
const {moudule : data} = require("./data")
http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type' : 'application\json'})
    res.write(JSON.stringify(data))
    res.end()
}).listen(3000)
