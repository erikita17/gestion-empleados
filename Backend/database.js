const mongoose = require("mongoose");
const dbconnect = () => {
    mongoose.set('strictQuery', true); 
    mongoose.connect("mongodb+srv://erikaestradal:empleados@gestionempleados.fiok6.mongodb.net/?retryWrites=true&w=majority&appName=gestionempleados", {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    })
    .then(() => console.log("Conexión exitosa..."))
    .catch((err) => console.log("Error de conexión: ", err.message));
}
module.exports = dbconnect;
