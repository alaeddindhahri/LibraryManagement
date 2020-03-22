import React,{Component} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./store/index";

//importing componenets
import LandingPage from './components/landingPage/index';
import LoginPage from './components/userLogin/index';
import Dashboard from './components/userDasboard/Index';


class App extends Component{
  
  render(){
    return (
      <Provider store={Store}>
        <BrowserRouter>
          <div className="container-fluid">
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/login" component={LoginPage} />
              <Route path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
