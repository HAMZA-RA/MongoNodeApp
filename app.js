const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');  // For rendering views
require('dotenv').config(); 

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));  // Parse URL-encoded bodies

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));  // Ensure views are in the right directory

// Use the environment variable for the MongoDB URI
const mongoURI = process.env.MONGODB_URI ;

// MongoDB Connection
mongoose.connect(mongoURI, {
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Routes
const bookRoutes = require('./routes/bookRoutes');
app.use('/api/books', bookRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
