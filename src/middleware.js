import api from "./api";
import { LOGIN, REGISTER, LOGOUT } from "./constans/actionTypes";

const localStorageMiddleWare = (store) => (next) => (action) => {
  if (action.type === REGISTER ?? action.type === LOGIN) {
    if (!action.error) {
      window.localStorage.setItem("jwt", action.payload.user.token);
      api.setToken(action.payload.user.token);
    } else if (action.type === LOGOUT) {
      window.localStorage.setItem("jwt", "");
      api.setToken(null);
    }

    next(action);
  }
};

export { localStorageMiddleWare };
