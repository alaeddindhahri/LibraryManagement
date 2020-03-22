import React, { Component } from 'react';
import './index.css';
import Logo from '../../assets/logo.png';

export default class index extends Component {
    state={
        searchStr:null
    }
    handleChange=e=>{
        this.setState({
            searchStr:e.target.value
        })
    }
    handlePreventDefault=(e)=>{
        e.preventDefault();
    }
    render() {
        return (
            <div className="container-fluid navbar-container">
                <div className="row login-button-container">
                    <a type="button" class="btn btn-secondary btn-login" href="/login">Login</a>
                </div>
                <nav className="navbar navbar-light bg-light row">
                    <div className="brand col-lg-4 col-sm-12">
                        <a href="/"><img className="logo" src={Logo} alt="logo" width="60px"/>
                        <h1 className="navbar-brand">Library Management</h1>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <form className="form-inline" onSubmit={e=>{this.handlePreventDefault(e);this.props.handleSearchString(this.state.searchStr)}}>
                            <input className="form-control mr-sm-2 search-box" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>this.handleChange(e)}/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={()=>this.props.handleSearchString(this.state.searchStr)}>Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        )
    }
}
