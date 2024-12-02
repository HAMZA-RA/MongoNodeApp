const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    publishedYear: { type: Number, required: true }
});

// Specify the collection name explicitly
const Book = mongoose.model('Book', bookSchema, 'book');  // Use 'book' as the collection name

module.exports = Book;
