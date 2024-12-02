### Node Mongo Project

A simple CRUD application built with Node.js, Express.js, and MongoDB to manage a list of books.
Description

This project is a basic web application where users can:

    Add new books to the database.
    View the list of books.
    Edit existing book details.
    Delete books from the database.

The application uses Node.js for the server, Express.js for routing, and MongoDB for the database.
Features

    Add new books with details like title, author, and publication year.
    Display a list of books with their details.
    Edit and update book information.
    Delete books from the list.
    All data is stored persistently in a MongoDB database.

Installation
Prerequisites

To run this project, ensure you have the following installed:

    Node.js - JavaScript runtime environment.
    MongoDB - Database for storing book data.

Steps to Set Up
### 1. Clone the repository:

Clone the project from GitHub to your local machine:
```bash 
git clone https://github.com/HAMZA-RA/MongoNodeApp.git
cd MongoNodeApp

```
### 2. Install dependencies:

Navigate to the project directory and install the required dependencies:
```bash
npm install
```
### 3. Set up your MongoDB database:

    If using a local MongoDB instance, ensure MongoDB is running on your system.
    If using MongoDB Atlas or another remote MongoDB service, update the MONGO_URI  value in the .env file to your database connection string.
```bash
Example .env file:

PORT=3000
MONGO_URI=mongodb://0.0.0.0:27017/books
```
### 4. Start the server:

Run the following command to start the application:
```bash
npm start
```
### 5. Access the application:

Open your browser and navigate to:

http://localhost:3000

Usage

    Homepage: View the list of books.
    Add Book: Navigate to /api/books/add to add a new book.
    Edit Book: Click on "Edit" for any book in the list to modify its details.
    Delete Book: Click on "Delete" to remove a book from the list.

Technologies Used

    Node.js: JavaScript runtime for server-side programming.
    Express.js: Framework for building web applications and APIs.
    MongoDB: NoSQL database for storing and retrieving book data.
    Mongoose: MongoDB object modeling tool for Node.js.

License

This project is licensed under the MIT License. See the LICENSE file for details.
