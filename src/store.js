import reducer from "./reducer";
import { createStore, applyMiddleware } from "redux";
import { localStorageMiddleWare } from "./middleware";
import { routerMiddleware } from "react-router-redux";
import createHistory from "history/createBrowserHistory";

export const history = createHistory();

const myRouterMiddleware = routerMiddleware(history);

const getMiddleware = () => {
  if (process.env.NODE_ENV === "production") {
    return applyMiddleware(
      myRouterMiddleware,
      localStorageMiddleWare
    );
  } else {
    // Enable additional logging in non-production environments.
    return applyMiddleware(
      myRouterMiddleware,
      localStorageMiddleWare
    );
  }
};

export const store = createStore(reducer, getMiddleware());
