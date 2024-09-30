const express = require("express");
const cors = require('cors');
const dbconnect = require("./config");
const app = express();

// Middleware para manejar JSON y CORS
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200' }));

// Definir rutas de la API
app.use('/api/usuarios', require('./routes/usuario.routes'));
app.use('/api/gestion-empleados', require('./routes/empleado.routes'));

// Conectar a la base de datos
dbconnect();

// Asignar el puerto desde la variable de entorno (Vercel)
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`El servidor está en el puerto ${port}`);
});
