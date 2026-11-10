const {Router} = require('express');
const {
    createStudentController,
    getAllStudents,
    getStudentById,
    deleteStudentById,
    updateStudentController
} = require('../controllers/studentControllers');

const studentRouter = Router();

//Ruta para crear un estudiante
studentRouter.post("/", async(req, res)=>{
    const {dni, firstName, lastName, email} = req.body;
    try{
        const newStudent = await createStudentController({dni, firstName, lastName, email})
        res.status(201).json(newStudent)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})
//Ruta para ver a todos los estudiantes
studentRouter.get("/", async(req,res)=>{
    try{
        const student = await getAllStudents()
        res.status(200).json(student)
    } catch(error){
        res.status(500).json({error: error.message})
    }
})

//Ruta para ver a un estudiante por su ID
studentRouter.get("/:id", async(req, res)=>{
    try{
        const student = await getStudentById(req.params.id)
        if(!student) return res.status(404).json({error: "Student not found"})
        res.status(200).json(student)
    }catch(error){
        res.status(500).json({error: error.message})
    }
})

//Ruta para actualizar a un estudiante por su ID
studentRouter.put("/:id", async(req, res)=>{
    try{
        const updated = await updateStudentController(req.params.id, req.body)
        if(!updated) return res.status(404).json({error: "Student not found"})
        res.status(200).json(updated)
    }catch(error){
        res.status(500).json({error: error.message})
    }
})

//Ruta para eliminar a un estudiante por su ID
studentRouter.delete("/:id", async(req, res)=>{
    try{
        const deleted = await deleteStudentById(req.params.id)
        if(!deleted) return res.status(404).json({error: "Student not found"})
        res.status(200).json({message: "Student deleted successfully"})
    }catch(error){
        res.status(500).json({error: error.message})
    }
})

module.exports = studentRouter