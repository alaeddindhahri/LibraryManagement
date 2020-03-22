import React, { Component } from 'react';
import {connect} from 'react-redux';
import './styles.css';
import Navbar from './navbar/navbar';
import DashboardContent from './dashboardContent/index';

 class index extends Component {
     state={
         section:"Books",
     }
     handleRenderedSection=(section,e)=>{
         e.preventDefault();
         this.setState({
             section:section
         })
     }
    componentDidMount(){
        if(!this.props.authUser.isAuthenticated){
            return this.props.history.push('/login');
        }
        // this.props.setProjects();
        // this.props.setInstructors();
        // this.props.setStudents();
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col top-navbar">
                        <Navbar handleRenderedSection={this.handleRenderedSection}/>
                    </div>
                </div>
                <div className="row">
                    <DashboardContent section={this.state.section}/>
                </div>
                <footer className="row myfooter">
                    <div className="copyright text-center my-auto">
                        <span>Copyright © LibraryManagement 2020</span>
                    </div>
                </footer>
            </div>
        )
    }
}
const mapStateToProps=state=>({
    authUser: state.authUser,
    errors: state.errors
})
export default connect(mapStateToProps,{})(index);