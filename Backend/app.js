const express = require("express");
const cors = require('cors');
const dbconnect = require("./config");
const app = express();

app.use(express.json());
app.use(cors({origin:'http://localhost:4200'}))
app.use('/api/usuarios',require ('./routes/usuario.routes'));
app.use('/api/empleados',require ('./routes/empleado.routes'));
app.listen(3005, ()=>{
    console.log("El Servidor está en el Puerto 3005")
})

dbconnect();
