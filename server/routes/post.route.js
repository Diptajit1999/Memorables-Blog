const express=require("express")

const postRouter=express.Router()
const {getPosts}=require("../controllers/post.controllers.js")
postRouter.get("/",getPosts)

module.exports={
    postRouter
}
