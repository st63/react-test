import { combineReducers, createStore } from "redux";
import postsReducer from './posts-reducer';

let reducers = combineReducers({
	posts: postsReducer,
 });
 
export let store = createStore(reducers);
 
 