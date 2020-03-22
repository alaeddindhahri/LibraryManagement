import React, { Component } from 'react';
import './index.css';
import {connect} from 'react-redux';
import classnames from 'classnames';
import {loginUser} from '../../actions/userActions';

class index extends Component {
    constructor(){
        super();
        this.state={
            username:'',
            password:'',
            errors:{},
        }
    }
    componentDidMount(){
        if(this.props.authUser.isAuthenticated){
            this.props.history.push('/dashboard');
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.authUser.isAuthenticated){
            this.props.history.push('/dashboard');
        }

        if(nextProps.authUser.errors){
            this.setState({
                errors:nextProps.authUser.errors
            })
        }
    }
    handleChange = e =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit=e=>{
        e.preventDefault();

        const adminData={
            username: this.state.username,
            password: this.state.password
        };
        this.props.loginUser(adminData);
    }
    render() {
        const {errors} = this.state;
        return (
            <div className="container-fluid">
                <div className="row">
                    <a href="http://localhost:3000/" className="admin-login-header">
                        <h1>Library Management</h1>
                    </a>
                </div>
                <div className="row login">
                <form noValidate className="login-form" onSubmit={(e)=>this.handleSubmit(e)}>
                    <div className="form-group">
                        <label>Username</label>
                        <input 
                        type="text" 
                        name="username" 
                        defaultValue={this.state.username} 
                        className={classnames('admin-input form-control',
                        {'is-invalid':errors.username})} 
                        id="exampleInputEmail1" 
                        onChange={(e)=>this.handleChange(e)}/>
                        {errors.username&&(<div className="invalid-feedback">{errors.username}</div>)}
                    </div>
                    <div className="form-group">
                        <label >Password</label>
                        <input type="password" name="password" defaultValue={this.state.password} 
                        className={classnames("admin-input form-control",{'is-invalid':errors.password})} 
                        id="exampleInputPassword1" onChange={(e)=>this.handleChange(e)}/>
                        {errors.password&&(<div className="invalid-feedback">{errors.password}</div>)}
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
                </div>
                <div className="row myfooter pt-2">
                    <div className="copyright text-center">
                        <span>Copyright © LibraryManagement 2020</span>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps=state=>({
    authUser: state.authUser,
    errors: state.errors
})
export default connect(mapStateToProps,{loginUser})(index);