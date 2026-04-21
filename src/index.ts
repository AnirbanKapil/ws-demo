import WebSocket, {WebSocketServer} from "ws";
import http from "http";
import { error } from "console";

const server = http.createServer(function(req:any , res:any){
    console.log((new Date()) + " Received request for " + req.url);
    res.end("Hii there");
})

const wss = new WebSocketServer({server});

wss.on("connection",function connection (socket) {
    socket.on("error",console.error)

    socket.on("message",function message (data) {
       wss.clients.forEach((client)=>{
        if(client.readyState === WebSocket.OPEN) {
            client.send(data)
        }
       })
    })

    socket.send("Hello from server !!!")
})











server.listen(8080,function() {
    console.log((new Date()) + "Server listening on port 8080")
})