// All the logic for the methods of the posts route
const { PostModel } = require("../models/post.models");



const getPosts = async (req, res) => {
  try {
    const posts = await PostModel.find();
    res.status(200).send(posts);
  } catch (error) {
    res.status(400).send("error", "There is an error at getting posts");
  }
};

const postData=async (req,res)=>{
    
    const postData=req.body;
    const newPosts= new PostModel(postData)

    try {
        await newPosts.save()
        res.status(201).send("creating posts",newPosts)
    } catch (error) {
        res.status(400).send("error in posting Posts Data",error.message)
    }
}

module.exports = {
  getPosts,
  postData
};
