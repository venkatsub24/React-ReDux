import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import freeze from "redux-freeze";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import rootReducer from "./reducer";

let middlewares = [];

middlewares.push(promise());
middlewares.push(thunk);
middlewares.push(logger);

if (process.env.NODE_ENV !== "production") {
  middlewares.push(freeze);
}

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
