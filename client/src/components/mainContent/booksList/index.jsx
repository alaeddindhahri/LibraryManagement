import React, { Component } from 'react';
import './index.css';
import {connect} from 'react-redux';
import {getBooks} from '../../../actions/bookActions';


//importing components
import BookCard from '../bookCard/index';

class index extends Component {
    
    componentDidMount(){
        this.props.getBooks();
    }
    render() {
        return (
            <div className="row">
                {
                    this.props.searchString==null?
                    this.props.books.books.map((book,key)=>
                    <BookCard book={book} key={key} toggleModal={this.props.toggleModal} handleBookShown={this.props.handleBookShown}/>
                    ):
                    this.props.books.books.filter(book=>book.title.search(this.props.searchString)!=-1?book:null)
                    .map((book,key)=><BookCard book={book} key={key} toggleModal={this.props.toggleModal} handleBookShown={this.props.handleBookShown}/>)
                }
            </div>
        )
    }
}
const mapStateToProps=state=>({
    books: state.books,
    errors: state.errors
})
export default connect(mapStateToProps,{getBooks})(index);
