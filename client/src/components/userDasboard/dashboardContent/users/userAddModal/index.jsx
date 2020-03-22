import React, { Component } from 'react';
import { connect } from "react-redux";

import './index.css';
import {addUser,getUsers} from '../../../../../actions/userActions';

class index extends Component {
    state={
        username:null,
        password:null,
        email:null
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render() {
        return (
            <div className="modal-container" >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">New User</h5>
                        </div>
                        <div className="modal-body">
                            <input type="text" className="form-control modal-input modal-username" placeholder="username..." name="username" onChange={(e)=>this.handleChange(e)}/>
                            <input type="password" className="form-control modal-input modal-password" placeholder="password..." name="password" onChange={(e)=>this.handleChange(e)}/>
                            <input type="email" className="form-control modal-input modal-email" placeholder="email..." name="email" onChange={(e)=>this.handleChange(e)}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={()=>this.props.toggleAddUserModal()}>Cancel</button>
                            <button type="button" className="btn btn-success" data-dismiss="modal" onClick={()=>{this.props.addUser(this.state);this.props.getUsers();this.props.toggleAddUserModal()}}>Add</button>
                        </div>
                        </div>
                    </div>
                </div>
        )
    }
}
export default connect(null, {addUser,getUsers})(index);