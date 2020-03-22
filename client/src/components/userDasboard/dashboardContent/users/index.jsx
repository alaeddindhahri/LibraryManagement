import React, { Component } from 'react';
import { connect } from "react-redux";
import {getUsers} from '../../../../actions/userActions';
import './styles.css';

import UserCard from './userCard/index';
import AddModal from './userAddModal/index';

class index extends Component {
    state={
        addIsOpen: false
    }
    toggleAddUserModal=()=>{
        this.setState({
            addIsOpen:!this.state.addIsOpen
        })
    }
    componentDidMount(){
        this.props.getUsers();
    }
    render() {
        return (
            <div className="container dashboard-users">
                {this.state.addIsOpen?<AddModal toggleAddUserModal={this.toggleAddUserModal} />:null}
                <div className="row add-container">
                    <button type="button" className="btn btn-success" onClick={()=>this.toggleAddUserModal()}>New User</button>
                </div>
                <div className="row users-container">
                    {
                        this.props.users.users.map((user,key)=><UserCard user={user} key={key}/>)
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    users: state.users,
    errors: state.errors
  });
  export default connect(mapStateToProps, {getUsers})(index);