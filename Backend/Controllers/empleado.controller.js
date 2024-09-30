const Empleado = require('../Models/empleado');
const empleadoCtrl = {};

// Obtener todos los empleados
empleadoCtrl.getEmpleados = async (req, res) => {
    try {
        const empleados = await Empleado.find();
        res.json(empleados);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear empleados
empleadoCtrl.createEmpleados = async (req, res) => {
    try {
        const empleado = new Empleado(req.body);
        await empleado.save();
        res.json({ status: 'Empleado guardado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Conseguir un único empleado
empleadoCtrl.getUnicoEmpleado = async (req, res) => {
    try {
        const empleadoUnico = await Empleado.findById(req.params.id);
        if (!empleadoUnico) {
            return res.status(404).json({ message: 'Empleado no encontrado' });
        }
        res.json(empleadoUnico);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar empleado
empleadoCtrl.editarEmpleado = async (req, res) => {
    try {
        const { id } = req.params; // Asegúrate de recibir el ID
        const empleadoEdit = {
            name: req.body.name,
            position: req.body.position,
            office: req.body.office,
            salary: req.body.salary
        };
        const updatedEmpleado = await Empleado.findByIdAndUpdate(id, { $set: empleadoEdit }, { new: true });
        if (!updatedEmpleado) {
            return res.status(404).json({ message: 'Empleado no encontrado' });
        }
        res.json({ status: 'Empleado Actualizado', data: updatedEmpleado });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Eliminar empleado
empleadoCtrl.eliminarEmpleado = async (req, res) => {
    try {
        await Empleado.findByIdAndDelete(req.params.id);
        res.json({ status: 'Empleado Eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Exporto el módulo
module.exports = empleadoCtrl;
