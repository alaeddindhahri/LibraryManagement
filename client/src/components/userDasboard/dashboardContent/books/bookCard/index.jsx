import React, { Component } from 'react';
import './index.css';

export default class index extends Component {
    render() {
        return (
            <div className="container">
                <div className="row book-details">
                    <div className="col-lg-7 col-xs-12">
                        <p>{this.props.book.title}</p>
                    </div>
                    <div className="col-lg-2 col-xs-12">
                        <p>{this.props.book.isbn}</p>
                    </div>
                    <div className="col-lg-3 col-xs-12 btn-edit-delete">
                        <button type="button" className="btn btn-primary" onClick={()=>{this.props.handleSetBook(this.props.book);this.props.handleIsOpenEdit()}}>Edit</button>
                        <button type="button" className="btn btn-danger" onClick={()=>{this.props.handleSetBook(this.props.book);this.props.handleIsOpenDelete()}}>Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}
