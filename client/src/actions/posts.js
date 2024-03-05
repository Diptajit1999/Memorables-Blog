//importing every actions as api
import * as api from "../api"

// Action creators

export const getPosts=()=>async (dispatch)=>{
    try {
        //Destructering the data object directly
        const {data}=await api.fetchPosts()
        //dispatches the action to the reducer/posts
        dispatch({type:"FETCH_ALL",payload:data})
    } catch (error) {
        console.log(error.message)
    }
   
}