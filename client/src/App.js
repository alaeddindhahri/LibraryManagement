import React,{Component} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./store/index";

//importing components
import Navbar from './components/navbar/index';
import MainContent from './components/mainContent/index';

class App extends Component{
  state={
    searchString:null
  }
  handleSearchString=str=>{
    console.log("clicked search, new str=",this.state.searchString)
    this.setState({
      searchString:str
    })
  }
  render(){
    return (
      <Provider store={Store}>
        <div className="container-fluid">
          <Navbar handleSearchString={this.handleSearchString}/>
          <MainContent searchString={this.state.searchString}/>
        </div>
      </Provider>
    );
  }
}

export default App;
