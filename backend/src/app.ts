import express , {Application, Request, Response} from 'express'
import dotenv from 'dotenv'
import { connectDb } from './config/Db.js'
dotenv.config()

const app : Application = express()

const port : number = Number(process.env.PORT) || 5000


app.get('/',(req:Request,res:Response)=>{
    res.send('OK')
})

console.log(process.env.MONGODB_URL);
connectDb().then(()=>{
    app.listen(port,()=>console.log("Server Running on Port 5000"))
})


// http://13.233.199.252:8080/newJob