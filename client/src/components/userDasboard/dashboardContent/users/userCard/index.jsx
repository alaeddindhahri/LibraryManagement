import React, { Component } from 'react';
import './index.css';

export default class index extends Component {
    render() {
        return (
            <div className="col-lg-4 col-xs-12 user-card">
                <div className="card" style={{"width": "18rem"}}>
                    <div className="card-header">
                        User Details
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{this.props.user.username}</li>
                        <li className="list-group-item">{this.props.user.email}</li>
                    </ul>
                </div>
            </div>
        )
    }
}
