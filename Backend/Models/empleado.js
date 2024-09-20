const mongoose = require('mongoose');
const {Schema} = mongoose;

const empleadoModel = new Schema(
    {
    name: {type:String, require:true},
    position: {type:String, require:true},
    office: {type:String, require:true},
    salary: {type:Number, require:true},
    },
    {
        timestamps:true,
        versionKey:false,
    }
)

const ModelEmpleado = mongoose.model('Empleado', empleadoModel);
module.exports = ModelEmpleado;
