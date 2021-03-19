import { applyMiddleware, createStore, compose } from "redux";
import rootReduser from "./reducer";
import thunkMiddleware from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'

let enhancer = applyMiddleware(thunkMiddleware);

// @ts-ignore
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  // @ts-ignore
  enhancer = compose(enhancer, window.__REDUX_DEVTOOLS_EXTENSION__());
}

const persistConfig = {
	key: 'root',
	storage,
 }

export const store = createStore(persistReducer(persistConfig, rootReduser), enhancer);

export const persistor = persistStore(store);
