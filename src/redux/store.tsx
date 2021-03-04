import { combineReducers, createStore } from "redux";
import postsReducer from "./reducers";

let reducers = combineReducers({
  posts: postsReducer,
});

export let store = createStore(reducers);
