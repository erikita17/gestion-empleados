const mongoose = require('mongoose');
const { Schema } = mongoose;

const empleadoSchema = new Schema({
    name: { type: String, required: true },
    position: { type: String, required: true },
    office: { type: String, required: true },
    salary: { type: Number, required: true },
}, {
    timestamps: true,
    versionKey: false,
});

const ModelEmpleado = mongoose.model('Empleado', empleadoSchema);
module.exports = ModelEmpleado;
