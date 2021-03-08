import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Article from "./Article";
import Editor from "./Editor";
import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";
import ProfileFavorites from "./ProfileFavorites";
import Register from "./Register";
import Settings from "./Settings";
import Header from "./Header";
import { APP_LOAD, REDIRECT } from "../constans/actionTypes";

const mapStateToProps = (state) => {
  return {
    appLoaded: state.common.appLoaded,
    appName: state.common.appName,
    currentUser: state.common.currentUser,
    redirectTo: state.common.redirectTo,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onLoad: (payload, token) =>
      dispatch({ type: APP_LOAD, payload, token, skipTracking: true }),
    onRedirect: () => dispatch({ type: REDIRECT }),
  };
};

class App extends React.Component {
  render() {
    if (this.props.appLoaded) {
      return (
        <>
          <Header
            appName={this.props.appName}
            currentUser={this.props.currentUser}
          />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/editor/:slug" component={Editor} />
            <Route path="/editor" component={Editor} />
            <Route path="article/:id" component={Article} />
            <Route path="/settings" component={Settings} />
            <Route path="/@:username/favorites" component={ProfileFavorites} />
            <Route path="/@:username" component={Profile} />
          </Switch>
        </>
      );
    }

    return (
      <>
        <Header
          appName={this.props.appName}
          currentUser={this.props.currentUser}
        />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
