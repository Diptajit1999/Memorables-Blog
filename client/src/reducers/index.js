// import { combineReducers } from "redux";

// import {postsReducer} from "./posts";

// export default combineReducers({
//     postsReducer,
// })


// reducers/index.js
import { combineReducers } from "redux";
import {postsReducer as posts} from "./posts";

export const reducers = combineReducers({
  posts,
});
