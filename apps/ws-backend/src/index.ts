import {prisma} from "@repo/db";
import {WebSocketServer} from "ws";

const wss = new WebSocketServer({port:8080});

wss.on("connection",(ws,req)=>{
    ws.on("message",()=>{
        ws.send("hey");
    })

    ws.on("close",()=>{
        ws.send("i am leaving");
        wss.close();
    })
})