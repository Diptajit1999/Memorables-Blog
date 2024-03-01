const express=require("express")

const postRouter=express.Router()
const {getPosts,postData}=require("../controllers/post.controllers.js")
postRouter.get("/",getPosts)
postRouter.post("/",postData)

module.exports={
    postRouter
}
