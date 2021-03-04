import { applyMiddleware, combineReducers, createStore } from "redux";
import postsReducer from "./reducers";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  posts: postsReducer,
});

export let store = createStore(reducers, applyMiddleware(thunkMiddleware));
