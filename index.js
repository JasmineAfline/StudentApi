const express = require('express');
const app = express();

const studentsRoutes = require('./routes/api');
const userRoutes = require("./routes/userRoutes");

require('dotenv').config();
require('./helpers/init_mongodb');

const Student = require("./models/studentmodels"); // Added student model

app.use(express.json());
app.use("/", userRoutes);
app.use(studentsRoutes);

// DELETE a student from the database
app.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const student = await Student.findByIdAndRemove(id);
        res.send(student);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ error: 'Something went wrong' });
    }
});

// Handle 404 Not Found
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// General Error Handler
app.use((err, req, res, next) => {
    res.status(err.status || 500).send({
        error: {
            message: err.message
        }
    });
});

app.listen(process.env.PORT || 4000, function () {
    console.log('Now listening for requests on http://localhost:4000');
});
