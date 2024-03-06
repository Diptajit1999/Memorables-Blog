//importing every actions as api
// import * as api from "../api"
import { createPosts,fetchPosts } from "../api/index"
// Action creators

export const getPosts=()=>async (dispatch)=>{
    try {
        //Destructering the data object directly
        const {data}=await fetchPosts()
        //dispatches the action to the reducer/posts
        dispatch({type:"FETCH_ALL",payload:data})
    } catch (error) {
        console.log(error.message)
    }
   
}

export const createPost=(post)=>async(dispatch)=>{
    try {
        const {data}=await createPosts(post)
        console.log("thhis is the actrion object-", data)
        dispatch({type:"CREATE_POST",payload:data})
    } catch (error) {
        console.log(error)
    }
}