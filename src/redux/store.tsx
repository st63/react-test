import { applyMiddleware, createStore, compose } from "redux";
import rootReduser from "./reducer";
import thunkMiddleware from "redux-thunk";
import { persistStore } from "redux-persist";

let enhancer = applyMiddleware(thunkMiddleware);

// @ts-ignore
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  // @ts-ignore
  enhancer = compose(enhancer, window.__REDUX_DEVTOOLS_EXTENSION__());
}

export const store = createStore(rootReduser, enhancer);

export const persistor = persistStore(store);
