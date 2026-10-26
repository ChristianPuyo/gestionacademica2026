const {Router} = require('express');

const courseRouter = Router();

//Ruta para crear un curso

courseRouter.post("/",async (req, res)=>{
    const {name, description, credits, cycle} = req.body;
    try{
        const newCourse = await createCourseController({name, description, credits, cycle})
        res.status(201).json(newCourse)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

//Ruta para obtener todos los cursos
courseRouter.get("/", async(req, res)=>{
    try{
        const courses = await getAllCourses()
        res.status(200).json(courses)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

//Actualizar un curso por id
courseRouter.put("/:id", async(req, res)=>{
    const {id} = req.params;
    const courseData = req.body;
    try{
        const updatedCourse = await updateCourseController(id, courseData)
        if(!updatedCourse){
           return res.status(404).json({error: "Course not found"})
        }
        res.status(200).json(updatedCourse)
    } catch (error) {
        res.status(400).json({error: error.message})
    }

})

//Eliminar un curso por id
courseRouter.delete("/:id", async(req, res)=>{
    const {id} = req.params;
    try{
        const deletedCourse = await deleteCourseController(id)
        if(!deletedCourse){
            return res.status(404).json({error: "Course not found"})
        }
        res.status(200).json({message: "Course deleted successfully"})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

module.exports = courseRouter;