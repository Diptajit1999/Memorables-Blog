export const postsReducer= (posts=[],action)=>{
    switch(action.type){
        case "FETCH_ALL":{
            return action.payload;
        }
        case "CREATE_POST":{
            console.log(action.payload)
            return [...posts,action.payload]
        }
        default:
            return posts;
    }
}

export default postsReducer
