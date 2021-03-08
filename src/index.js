import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import { store, history } from "./store";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </ConnectedRouter>
  </Provider>,

  document.getElementById("root"),
);
