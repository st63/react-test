import { combineReducers, createStore } from "redux";
import postsReduser from './posts-reduser';

let redusers = combineReducers({
	posts: postsReduser,
 });
 
export let store = createStore(redusers);
 
 