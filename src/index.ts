import WebSocket, {WebSocketServer} from "ws";
import http from "http";

const server = http.createServer(function(req:any , res:any){
    console.log((new Date()) + " Received request for " + req.url);
    res.end("Hii there");
})

const wss = new WebSocketServer({server});













server.listen(8080,function() {
    console.log((new Date()) + "Server listening on port 8080")
})