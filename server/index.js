import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";



const app=Express();

app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))

app.use(cors())

const MongodbURL="mongodb+srv://diptajitdas66:Dipatjit@cluster0.jsg7tjf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const PORT=process.env.PORT||5000;

mongoose.connect(MongodbURL,{useNewUrlparser:true,useUnifiedTopology:true}).then(()=>app.listen(PORT,()=>console.log(`Server is running at ${PORT}`))).catch((err)=>console.log(err.message))

mongoose.set(`useFindAndModify`,false)