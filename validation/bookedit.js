const Validator = require('validator');
const isEmpty = require('./is-empty');


module.exports = function validateBookEdit(data){
    let errors = {};

    data.title = !isEmpty(data.title)?data.title:'';
    data.isbn = !isEmpty(data.isbn)?data.isbn:'';

    if(Validator.isEmpty(data.title)){
        errors.title='Title field is required';
    }

    if(Validator.isEmpty(data.isbn)){
        errors.isbn='ISBN field is required';
    }

    return{
        errors,
        isValid:isEmpty(errors)
    };
};