const express = require("express");
const routes = express.Router();
const usercontroller = require("../controller/usercontroller");

// Register a new user
routes.post('/register', usercontroller.registeruser);

// Get a user by ID
routes.get('/getuser/:id', usercontroller.getuser);

router.post("/postuser", usercontroller.postuser);

// Delete a user by ID
routes.delete('/deleteuser/:id', usercontroller.deleteuser); 

module.exports = routes;
