import React from "react";
import { Link } from "react-router-dom";

function LoggedOutView({ currentUser }) {
  if (!currentUser) {
    return (
      <ul>
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Sign in
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Sign up
          </Link>
        </li>
      </ul>
    );
  }

  return null;
}

function LoggedInzview({ currentUser }) {
  if (currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/editor" className="nav-link">
            <i className="ion-compose"></i>&nbsp;New Post
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/settings" className="nav-link">
            <i className="ion-gear-a"></i>&nbsp;Settings
          </Link>
        </li>
        <li>
          <Link to={`/@${currentUser.username}`} className="nav-link">
            <img
              src={currentUser.image}
              className="user-pic"
              alt={currentUser.username}
            />
          </Link>
        </li>
      </ul>
    );
  }

  return null;
}

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
            {this.props.appName.toLowerCase()}
          </Link>

          <LoggedOutView currentUser={this.props.currentUser} />
          <LoggedInzview currentUser={this.props.currentUser} />
        </div>
      </nav>
    );
  }
}

export default Header;
