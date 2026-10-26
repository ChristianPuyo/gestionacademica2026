const express = require("express");//importamos express
const morgan = require("morgan");//importamos morgan
const server = express(); //Creamos el servidor
const PORT = 3001; // Puerto en el que se ejecutará el servidor
server.use(morgan("dev"));
server.use(express.json());
server.listen(3001,()=>{
console.log(`Server listening on port ${PORT}`)
});