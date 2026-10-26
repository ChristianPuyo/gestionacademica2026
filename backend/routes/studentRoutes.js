const {Router} = require('express');

const studentRouter = Router();

//Ruta para crear un estudiante
studentRouter.post("/", async(req, res)=>{
    const {name, lastName, email, age} = req.body;
    try{
        const newStudent = await createStudentController({name, lastName, email, age})
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