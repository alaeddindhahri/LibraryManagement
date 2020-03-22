import React, { Component } from 'react';
import { connect } from "react-redux";
import {updateBook} from '../../../../../actions/bookActions';
import './index.css';


class index extends Component {
    state={
        longDescription:null
    }
    handleChange=e=>{
        this.setState({
            longDescription:e.target.value
        })
    }
    componentDidMount(){
        this.setState({
            longDescription:this.props.book.longDescription
        })
    }
    render() {
        return (
            <div className="modal-edit" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content modal-edit-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Update Book Description</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={()=>this.props.handleIsOpenEdit()}>
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <textarea onChange={(e)=>this.handleChange(e)}>{this.props.book.longDescription}</textarea>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={()=>this.props.handleIsOpenEdit()}>Cancel</button>
                        <button type="button" className="btn btn-success" onClick={()=>{this.props.updateBook(this.props.book._id,this.state);this.props.handleIsOpenEdit()}}>Update</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(null, {updateBook})(index);