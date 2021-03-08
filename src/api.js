/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const API_ROOT = "https://conduit.productionready.io/api";

const responseBody = (res) => res.data;
const error = (err) => console.log(err.response || err);

let token = null;
const tokenPlugin = { headers: { authorization: `Token ${token}` } };

const request = {
  get: (url) =>
    axios.get(`${API_ROOT}${url}`, tokenPlugin).then(responseBody).catch(error),
  post: (url, body) =>
    axios
      .post(`${API_ROOT}${url}`, body, tokenPlugin)
      .then(responseBody)
      .catch(error),
};

const Auth = {
  current: () => request.get("/user"),
  register: (username, email, password) =>
    request.post("/users", { user: { username, password, email } }),
  login: (email, password) =>
    request.post("/users/login", { user: { email, password } }),
};

const limit = (count, p) => `limit=${count}&offset=${p ? p * count : 0}`;

const Articles = {
  feed: () => request.get("/articles/feed?limit=10&offset=0"),
  all: (page) => request.get(`/articles?${limit(5, page)}`),
};

export default {
  Articles,
  Auth,
  setToken: (_token) => {
    token = _token;
  },
};
