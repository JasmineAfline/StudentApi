const express= require('express')
const studentsRoutes = require('./routes/api');
const Student = require('./Models/studentmodels');
require('dotenv').config();
require('./helpers/init_mongodb');
const app = express();
app.use(express.json());
app.use(studentsRoutes);

// handling 404 error
app.use((req, res, next)=>{
    const err = new Error("Not Found");
    err.status = 404;
    next(err)
})

//Error handler
app.use((err, req, res, next)=>{
    res.status(err.status || 500);
    res.send({
        error:{
            message: err.message
        }
    });

//delete a student from the DB
route.delete('/:id', async(req, res)=>{
    const id = req.params.id
    try {
        const student = await Student.findByIdAndRemove(id)
        res.send(student);

    } catch(error) {
        console.log(error.message);

    }
})

})
app. listen(process.env.PORT || 4000, function() {
    console.log('Now listening for requests on http://localhost:4000');
        });