import React, { Component } from 'react';
import './index.css';

//importing components
import Navbar from '../navbar/index';
import MainContent from '../mainContent/index';

export default class index extends Component {
    state={
        searchString:null
      }
      handleSearchString=str=>{
        this.setState({
          searchString:str
        })
      }
    render() {
        return (
            <div>
                <Navbar handleSearchString={this.handleSearchString}/>
                <MainContent searchString={this.state.searchString}/>
            </div>
        )
    }
}
