const express = require("express");
const routes = express.Router();
const studentcontroller = require("../controller/studentcontroller");

// Get a list of students from the database
routes.get('/getstudents', studentcontroller.addStudent);

// Add a student to the database
routes.post('/addstudent', studentcontroller.addStudent);

// // Update a student in the database
// routes.put('/students/:id', );

// Delete a student from the database
routes.delete('/deletestudent/:id',studentcontroller.deleteStudent); 

// Get a student from the database
routes.get('/getstudent/:id', studentcontroller.getstudent);

module.exports = routes;