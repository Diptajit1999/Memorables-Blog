const express=require("express")
const morgan = require("morgan")
const bodyParser=require("body-parser")
const cors=require("cors");
const {connection}=require("./db")
const {postRouter}=require("./routes/post.route")



const app=express()
app.use(morgan("dev"))
// app.use(cors())
const corsOptions = {
    origin: 'http://localhost:3000', // Replace with your client-side origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Enable cookies and authorization headers
  };
  
  app.use(cors(corsOptions));
app.use("/posts",postRouter)

app.use(express.json())
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));


app.listen(7000,async()=>{
    try {
        await connection;
        console.log("Connected to the Database")
        console.log(`Server is running at PORT 7000`)
    } catch (error) {
        console.log(`error`,error.message)
    }
    
})