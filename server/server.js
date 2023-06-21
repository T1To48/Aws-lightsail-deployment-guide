import express from "express";
import cors from "cors"
import morgan from "morgan";
import dotenv from "dotenv"
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./config/db.js"
import errorHandler from "./middlewares/errorHandler.js"
import todoRoute from "./routes/todoRoute.js"
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: __dirname+"/config/config.env" });
connectDB();

const app=express();
app.use(express.json())
app.use(cors())

if(process.env.NODE_ENV !== "production"){
    app.use(morgan("dev"))
}



app.use("/todo-storage/v1",todoRoute);
app.use(express.static(path.join(__dirname,"../client/dist")))
app.get("*",(_,res)=>{
    res.sendFile(path.join(__dirname,"../client/dist/index.html"))
})
app.use(errorHandler)

const PORT=process.env.PORT || 8080

const server=app.listen(PORT,console.log(` ⭐⭐server is running in ${process.env.NODE_ENV} Mode, & made on port ${PORT} ⭐⭐`))


process.on("unhandledRejection",(err,promise)=>{
    console.log(`😡😡 Error: ${err.message} 😡😡`)
    server.close(()=>process.exit(1));
})