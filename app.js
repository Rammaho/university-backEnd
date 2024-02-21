const express = require('express');

const cors = require('cors');

const app = express();

const universityRoutes = require('./university.route'); // Adjust the path as necessary



// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));


// enable cors
app.use(cors());
app.options('*', cors());


app.use('/api', universityRoutes);


module.exports = app;