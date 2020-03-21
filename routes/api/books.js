const express = require("express");
const router = express.Router();

// Load Book Edit Validation
const validateBookEdit = require("../../validation/bookedit");
//load Book model
const Book = require("../../models/Books");

// @route   GET api/book/all
// @desc    Return all books
// @access  Private
router.get("/all", (req, res) => {
    const errors = {};
    Book.find()
      .then(book => {
        if (!book) {
          errors.nobooks = "No books";
          return res.status(404).json(errors);
        }
        res.json(book);
      })
      .catch(err => res.status(404).json(err));
  });

// @route   PUT api/book/:_id
// @desc    Update 1 book by id
// @access  Private
router.put("/update/:_id", (req, res) => {
    const { _id } = req.params;
    const modifiedField = req.body;
    Book.findOneAndUpdate({ _id }, { $set: { ...modifiedField } })
      .then(book => res.json(book))
      .catch(err => res.send("error"));
  });

// @route   DELETE /api/book/:_id
// @desc    Delete book
// @access  public
router.delete("/delete/:_id", (req, res) => {
    const { _id } = req.params;
    Book.findOneAndDelete({ _id })
      .then(book => res.send(book))
      .catch(err => res.send("error"));
  });


module.exports = router;