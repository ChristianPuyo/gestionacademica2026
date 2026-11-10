const Student = require('../models/studentModel');

//Controller for create a new student
const createStudentController = async ({dni, firstName, lastName, email})=>{
    try{
        const newStudent = await Student.create({dni, firstName, lastName, email})
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
const updateStudentController = async (id, studentData) =>{
    try{
        const student = await Student.findByPk(id)
        if(!student) return null
        await student.update(studentData)
        return student
    }catch(err){
        throw new Error(err.message)
    }
}

module.exports = {
    createStudentController,
    getAllStudents,
    getStudentById,
    deleteStudentById,
    updateStudentController
}