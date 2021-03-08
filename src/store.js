import reducer from "./reducer";
import { createStore, applyMiddleware } from "redux";
import { localStorageMiddleWare } from "./middleware";

export const store = createStore(
  reducer,
  applyMiddleware(localStorageMiddleWare),
);
