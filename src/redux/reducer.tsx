import postsReducer from "./posts/reducer";
import authReducer from "./auth/reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  posts: postsReducer,
  auth: authReducer,
});

export default rootReducer;
