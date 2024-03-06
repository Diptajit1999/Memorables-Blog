import axios from "axios"


const url="http://localhost:7000/posts";


export const fetchPosts=()=>axios.get(url);
// export const createPosts=(newPost)=>
// {console.log(newPost),
// axios.post(url,newPost)}

export const createPosts = async (newPost) => {
    console.log(newPost)
    let res = await axios.post(url,{...newPost})
    return res
   
  };