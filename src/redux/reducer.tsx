import postsReducer from "./posts/reduser";
import authReducer from "./auth/reduser";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  posts: postsReducer,
  auth: authReducer,
});

export default rootReducer;
