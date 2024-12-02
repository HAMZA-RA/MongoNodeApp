const express = require('express');
const router = express.Router();
const Book = require('../models/book');

// Route to fetch all books and render them as a list
router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.render('index', { books });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to render the add book form
router.get('/add', (req, res) => {
    res.render('add');
});

// Route to handle adding a new book
router.post('/add', async (req, res) => {
    const { title, author, publishedYear } = req.body;

    const newBook = new Book({
        title,
        author,
        publishedYear
    });

    try {
        await newBook.save();
        res.redirect('/api/books');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to render the edit book form
router.get('/edit/:id', async (req, res) => {
    const book = await Book.findById(req.params.id);
    if (!book) {
        return res.status(404).send('Book not found');
    }
    res.render('edit', { book });
});

// Route to handle editing a book
router.post('/edit/:id', async (req, res) => {
    const { title, author, publishedYear } = req.body;
    try {
        await Book.findByIdAndUpdate(req.params.id, { title, author, publishedYear });
        res.redirect('/api/books');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to delete a book
router.get('/delete/:id', async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id);
        res.redirect('/api/books');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to fetch all books in JSON format
router.get('/json', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);  // Send books as JSON
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports = router;
