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

//Obtener a  todos los estudiantes.
const getAllStudents = async ()=>{
    try {
        const students = await Student.findAll()
        return students
    } catch (err) {
        throw new Error(err.message)
    }
}

//Obtener a un estudiante por su ID
const getStudentById = async(id) =>{
    try{
        const student = await Student.findByPk(id)
        return student
    }catch(err){
        throw new Error(err.message)
    }
}

//Eliminar un estudiante por su ID
const deleteStudentById = async(id) =>{
    try{
        const student = await Student.findByPk(id)
        if(!student) return null
        await student.destroy()
        return true
    }catch(err){
        throw new Error(err.message)
    }
}

//Actualizar un estudiante