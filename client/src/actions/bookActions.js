import axios from 'axios';

import {GET_BOOKS,UPDATE_BOOK,DELETE_BOOK} from './types';
import {GET_ERRORS} from './types';

//get all books
export const getBooks=()=>dispatch=>{
    axios.get('/api/books/all')
        .then(res=>dispatch({
            type: GET_BOOKS,
            payload:res.data
        }))
        .catch(err=>dispatch({
            type:GET_ERRORS,
            payload:err.data
        }))
}
//update book
export const updateBook=(idBook,newData)=>dispatch=>{
    axios.put(`/api/books/update/${idBook}`,newData)
        .then(res=>dispatch({
            type:GET_BOOKS,
            payload:res.data
        })
        )
        .catch(err=> dispatch({
            type: GET_ERRORS,
            payload: err.data
        }));
}

//delete book
export const deleteBook=(idBook)=>dispatch=>{
    axios.delete(`/api/books/delete/${idBook}`)
        .then(res=>dispatch({
            type:GET_BOOKS,
            payload:res.data
        }))
        .catch(err=> dispatch({
            type: GET_ERRORS,
            payload: err.data
        }));
}