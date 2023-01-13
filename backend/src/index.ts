import express, { Request, Response } from "express";
const app =express();

app.get('/',(req:Request,res:Response)=>{
    return res.json({status :"Success full thngs "});
});
app.listen(4000,()=>console.log("Listening On Port 4000"))