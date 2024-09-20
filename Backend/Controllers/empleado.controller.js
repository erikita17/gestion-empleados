const ModelEmpleado = require('../models/empleado');
const empleadoCtrl = {};

// Crear empleados
empleadoCtrl.createEmpleado = async (req, res) => {
  try {
    const body = req.body;
    const respuesta = await ModelEmpleado.create(body);
    res.status(201).json({
      status: 'Empleado guardado',
      data: respuesta
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Consultar todos los empleados
empleadoCtrl.getEmpleado = async (req, res) => {
  try {
    const respuesta = await ModelEmpleado.find({});
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Conseguir un único empleado
empleadoCtrl.getUniqueEmpleado = async (req, res) => {
  try {
    const id = req.params.id;
    const respuesta = await ModelEmpleado.findById(id);
    if (!respuesta) {
      return res.status(404).json({ message: 'Empleado no encontrado' });
    }
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Actualizar empleado
empleadoCtrl.editEmpleado = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const respuesta = await ModelEmpleado.findByIdAndUpdate(id, body, { new: true });
    if (!respuesta) {
      return res.status(404).json({ message: 'Empleado no encontrado' });
    }
    res.status(200).json({
      status: 'Empleado actualizado',
      data: respuesta
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar empleado
empleadoCtrl.deleteEmpleado = async (req, res) => {
  try {
    const id = req.params.id;
    const respuesta = await ModelEmpleado.findByIdAndDelete(id);
    if (!respuesta) {
      return res.status(404).json({ message: 'Empleado no encontrado' });
    }
    res.status(200).json({ message: 'Empleado eliminado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = empleadoCtrl;
