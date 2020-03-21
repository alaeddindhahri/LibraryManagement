const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Books Schema
const BooksSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    isbn:{
        type: String,
        required: true
    },
    pageCount:{
        type: Number,
    },
    publishedDate:{
        type: Date,
    },
    thumb:{
        type: String,
    },
    shortDescription:{
        type: String,
    },
    longDescription:{
        type: String,
    },
    status:{
        type: String,
    },
    authors:{
        type: [String],
    },
    categories:{
        type: [String],
    }
},{collection:'Books'});

module.exports = Books = mongoose.model('Books',BooksSchema);
