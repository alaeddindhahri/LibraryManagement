import React, { Component } from "react";
import "./styles.css";

import { connect } from "react-redux";
import { logoutUser } from "../../../actions/userActions";

class navbar extends Component {
  handleLogout = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light dashboard-navbar">
        <a className="navbar-brand dashboard-navbar-brand" href="#">Library Management</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav dashboard-navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#" onClick={(e)=>this.props.handleRenderedSection('Books',e)}>Books <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item btn-users">
              <a className="nav-link" href="#" onClick={(e)=>this.props.handleRenderedSection('Users',e)}>Users</a>
            </li>
            <li className="nav-item">
              <a className="btn btn-danger" href="#" onClick={(e)=>this.handleLogout(e)}>Logout</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  // authUser:state.authUser
});

export default connect(mapStateToProps, { logoutUser })(navbar);
