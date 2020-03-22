import React, { Component } from "react";
import { connect } from "react-redux";
import {getBooks} from '../../../../actions/bookActions';
import './index.css';

import BookCard from './bookCard/index';
import DeleteModal from './bookDeleteModal/index';
import EditModal from './bookEditModal/index';

class index extends Component {
  state={
    isOpenEdit:false,
    isOpenDelete:false,
    book:{},
  }

  handleIsOpenEdit=()=>{
    this.setState({
      isOpenEdit:!this.state.isOpenEdit
    })
  }
  handleIsOpenDelete=()=>{
    this.setState({
      isOpenDelete:!this.state.isOpenDelete
    })
  }
  handleSetBook=clickedBook=>{
    this.setState({
      book:clickedBook
    })
  }
  componentDidMount(){
    this.props.getBooks();
  }
  render() {
    return (
      <div className="row dashboard-books">
        {this.state.isOpenDelete?<DeleteModal handleIsOpenDelete={this.handleIsOpenDelete} book={this.state.book}/>:null}
        {this.state.isOpenEdit?<EditModal handleIsOpenEdit={this.handleIsOpenEdit} book={this.state.book}/>:null}
        {this.props.books.books?this.props.books.books.map((book,key)=><BookCard book={book} key={key} handleSetBook={this.handleSetBook} handleIsOpenEdit={this.handleIsOpenEdit} handleIsOpenDelete={this.handleIsOpenDelete}/>):null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authUser: state.authUser,
  books: state.books,
  errors: state.errors
});
export default connect(mapStateToProps, {getBooks})(index);
