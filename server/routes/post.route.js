const express=require("express")

const postRouter=express.Router()

postRouter.get("/",(req,res)=>{
    res.send({"msg":"This works well Right!"})
})

module.exports={
    postRouter
}
