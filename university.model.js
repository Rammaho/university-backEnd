const mongoose = require('mongoose');

// Define a schema
const universitySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  location: {
    type: String
  },
  fees: {
    type: Number
  },
  numberOfStudents: {
    type: Number
  }
  // Add other fields as needed
});



// Create a model from the schema
const University = mongoose.model('University', universitySchema);

module.exports = University;
