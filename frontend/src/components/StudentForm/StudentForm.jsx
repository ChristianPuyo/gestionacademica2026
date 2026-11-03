import {useState} from 'react';

function StudentForm(){
    const [student, setStudent] = useState({
        firstName: '',
        lastName: '',
        dni: '',
        email: ''
    })


const hanbleChange = (e) =>{
    const {name, value} = e.target;
    setStudent({
        ...student,
        [name] : value
    })
} 

const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("Estudiante registrado:", student);
    alert("Estudiante Registrado con exito");
    setStudent({
        firstName: '',
        lastName: '',
        dni: '',
        email: ''
    })
}

return(
    <div>
        <h2>Registro de estudiantes</h2>
    </div>
)
}
export default StudentForm;