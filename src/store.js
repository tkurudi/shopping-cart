//import create store and apply middleware

import { createStore, applyMiddleware, compose } from "redux";
//import thunk
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initalState = {};
const middleware = [thunk];
const store = createStore(
  rootReducer,
  initalState,
  compose(
    applyMiddleware(...middleware),
    window.devToolsExtention ? window.devToolsExtention() : f => f
  )
);
export default store;
