# Node Mongo Project

A simple CRUD application built with Node.js and MongoDB to manage a list of books.

## Description

This project is a basic web application where users can:

- Add new books to the database.
- View the list of books.
- Edit existing books.
- Delete books from the database.

The application uses **Node.js** for the server, **Express.js** for routing, and **MongoDB** for the database.

---

## Features

- Add new books with title, author, and publication year.
- View a list of books with their details.
- Edit and update book details.
- Delete books from the list.
- Data is stored in a MongoDB database.

---

## Installation

### Prerequisites

To run this project, you need the following installed:

- [Node.js](https://nodejs.org/en/) - The JavaScript runtime used to run the application.
- [MongoDB](https://www.mongodb.com/) - The database to store and manage book data.

### Steps to Set Up

1. **Clone the repository:**

   ```bash
   git clone https://github.com/HAMZA-RA/MongoNodeApp.git
   cd node-mongo-project
2.**Install dependencies:**

Inside the project folder, run the following command to install the required dependencies:
   
npm install

3.**Set up your MongoDB database:**

If you're using MongoDB Atlas or another remote MongoDB service, update the mongoose.connect() URL in your code accordingly.

4.**Start the server:**

After installing the dependencies and setting up MongoDB, you can start the server with:

npm start

The application will be running on http://localhost:3000.
