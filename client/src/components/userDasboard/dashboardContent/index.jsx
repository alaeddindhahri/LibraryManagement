import React, { Component } from "react";
import "./styles.css";

//importing components
import Books from './books/index';
import Users from './users/index';


export default class index extends Component {
  state = {
    isOpen: false,
    user:{}
  };
  toggleIsOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  handleSetUser= user=>{
    this.setState({
      user:user
    })
  }

  renderSwitchSection = () => {
    switch (this.props.section) {
      case "Users":
        return <Users />;
      case "Books":
        return <Books />;
      default:
        return <Books />;
    }
  };
  render() {
    return (
      <div className="container-fluid content-container">
        {this.renderSwitchSection()}
      </div>
    );
  }
}
