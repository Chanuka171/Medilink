console.log("Hello, World!");

const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use("/",(req, res, next) => {
    res.send("It's working");
})

// Database connection
mongoose.connect("mongodb+srv://root:root123@cluster1.bidz4oy.mongodb.net/Medilink")
.then(() => console.log("Connected to the database"))
.then(() => {
    app.listen(5000);
})
.catch((err) => console.log(err));