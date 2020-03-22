import React, { Component } from 'react';
import { connect } from "react-redux";
import {deleteBook} from '../../../../../actions/bookActions';
import './index.css';


class index extends Component {
    render() {
        return (
            <div className="modal-delete" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content modal-delete-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Delete this book?</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={()=>this.props.handleIsOpenDelete()}>
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure you want to delete <span className="delete-book-name">{this.props.book.title}</span> ?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={()=>this.props.handleIsOpenDelete()}>Cancel</button>
                        <button type="button" className="btn btn-danger" onClick={()=>{this.props.deleteBook(this.props.book._id);this.props.handleIsOpenDelete()}}>Delete</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(null, {deleteBook})(index);