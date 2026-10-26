const Student = require('../models/studentModel');

//Controller for create a new student
const createStudentController = async ({name, lastName, email, age})=>{
    try{
        const newStudent = await Student.create({name, lastName, email, age})
        return newStudent;
    } catch(err){
        throw new Error(err.message)
    }
}