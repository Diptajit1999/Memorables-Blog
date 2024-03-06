const mongoose=require("mongoose");

const postSchema=mongoose.Schema({
title:{type:String,required:[true,"Title is required"]},
message:{type:String,required:[true,"message is required"]},
creator:{type:String,required:[true,"creator is required"]},
tags:[String],
selectedFile:{type:String,required:[true,"files is required"]},
likeCount:{
    type:Number,
    default:0
},
dislikeCount:{
    type:Number,
    default:0
},
createdAt:{
    type:Date,
    default:new Date()
}
},{
   versionKey:false
})

const PostModel=mongoose.model("post",postSchema);

module.exports={
    PostModel
}