import express, { request, response, Router } from "express";
/*import "reflect-metadata";
import "./database";
/*import {router} from "./route";*/
const app = express();
app.listen(3000,()=>console.log("server is running"));
app.use(express.json);
const router = Router()
/*router.get("/",req:request, res: response ){
    console.log("server rodando")
}*/
/*app.get("/test",(request,recsponse)=>{
   return response.send("olá"); 
})
app.post("/test-post",(request,response)=>{
    return response.send("post");
})
app.put("/test-put",(request,response)=>{
    return response.send("put");
})
/*app.use(router);*/
