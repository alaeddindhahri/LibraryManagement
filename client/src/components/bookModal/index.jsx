import React, { Component } from 'react';
import './index.css';

export default class index extends Component {
    render() {
        return (
                <div className="modal-container" >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{this.props.bookShown.title}</h5>
                        </div>
                        <div className="modal-body">
                            <p>{this.props.bookShown.longDescription?this.props.bookShown.longDescription:this.props.bookShown.shortDescription?this.props.bookShown.shortDescription:"no description found!"}</p>
                            <h4 className="authors">Authors: {this.props.bookShown.authors.map(author=>author +", ")}</h4>
                            <h4 className="categories">Categories: {this.props.bookShown.categories.map(category=>category +", ")}</h4>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={()=>this.props.toggleModal()}>Close</button>
                        </div>
                        </div>
                    </div>
                </div>
        )
    }
}
