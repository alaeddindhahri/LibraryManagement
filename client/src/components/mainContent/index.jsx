import React, { Component } from 'react';
import './index.css';

//importing components
import BooksList from './booksList/index';
import BookModal from '../bookModal/index';

export default class index extends Component {
    state={
        bookModalIsOpen : false,
        bookShown:{}
    }
    toggleModal=()=>{
        this.setState({
            bookModalIsOpen:!this.state.bookModalIsOpen
        })
    }
    handleBookShown=book=>{
        this.setState({
            bookShown:book
        })
    }
    render() {
        return (
            <div className='container-fluid main-content'>
                {this.state.bookModalIsOpen?<BookModal toggleModal={this.toggleModal} bookShown={this.state.bookShown}/>:null}
                <div className="jumbotron jumbotron-fluid row">
                    <div className="container">
                        <h1 className="display-4">Free Essential Books</h1>
                        <p className="lead">Power is gained by sharing knowledge, not hoarding it.</p>
                    </div>
                </div>
                <div className="row">
                    <BooksList toggleModal={this.toggleModal} handleBookShown={this.handleBookShown} searchString={this.props.searchString}/>
                </div>
            </div>
        )
    }
}
