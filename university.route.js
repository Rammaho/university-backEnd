const express = require('express');
const router = express.Router();
const universityController = require('./university.controller');

// Create a new University
router.post('/universities', universityController.createUniversity);

// Get all Universities.
router.get('/universities', universityController.getAllUniversities);

// Get a single University by id
router.get('/universities/:id', universityController.getUniversityById);

// Update a University by id
router.put('/universities/:id', universityController.updateUniversityById);

// Delete a University by id
router.delete('/universities/:id', universityController.deleteUniversityById);

module.exports = router;
