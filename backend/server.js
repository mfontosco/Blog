import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import UserRoute from './Routes/Users.js'
import PostRoute from  './Routes/Posts.js'
import CategoryRoute from './Routes/Categories.js'
import Post from './Models/PostModels.js'
import { connectDB } from './configs/db.js'

import colors from "colors"

const app = express()

app.use(express.json({limit:"50mb"}))
app.use(
    express.urlencoded({ extended: true })
);
// app.use(urlencoded({extended:true}))
app.use(morgan("dev"))
app.use(cors())

app.use("/api/v1/users",UserRoute)
app.use("/api/v1/posts",PostRoute)
app.use("/api/v1/category",CategoryRoute)

// app.get("/",(req,res)=>{
//     res.send("welcome to my blog post")
// })

// get single post route



//update post 



app.delete("/api/v1/posts/:id",async(req,res)=>{
const {id} = req.params
try{
const post  = await Post.findByIdAndDelete({_id:id})
res.status(200).json({
    status:"success",
    message:"successfully deleted"
})
}catch(err){
res.status({
    status:"failed",
    error:err.message
})
}

})


const start = async(port)=>{
    try{
        const conn = await connectDB()
        app.listen(port,(err)=>{
            if(err){
                throw err
            }
            console.log(`server is running on port ${port}`)
        })
        console.log(`database is connected to ${conn.connection.host}`)
    }catch(err){
        console.log(err)
    }
   
}

const port =4000;
start(port)

