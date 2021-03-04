import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import postsReducer from "./reducers";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  posts: postsReducer,
});

let enhancer = applyMiddleware(thunkMiddleware);
// @ts-ignore
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
	// @ts-ignore
	enhancer = compose(enhancer, window.__REDUX_DEVTOOLS_EXTENSION__())
}
// @ts-ignore
export let store = createStore(reducers, enhancer);
