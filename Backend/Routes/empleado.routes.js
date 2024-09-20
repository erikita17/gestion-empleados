const express = require('express');
const router = express.Router();
const empleadoCtrl = require('../controllers/empleado.controller');

// Ruta GET para obtener todos los empleados
router.get('/', empleadoCtrl.getEmpleado);

// Ruta POST para crear un nuevo empleado
router.post('/', empleadoCtrl.createEmpleado);

// Ruta GET para obtener un único empleado por ID
router.get('/:id', empleadoCtrl.getUniqueEmpleado);

// Ruta PUT para actualizar un empleado por ID
router.put('/:id', empleadoCtrl.editEmpleado);

// Ruta DELETE para eliminar un empleado por ID
router.delete('/:id', empleadoCtrl.deleteEmpleado);

// Ruta para verificar que la API está funcionando
router.get('/status', (req, res) => {
  res.status(200).json({ status: 'API REST funcionando' });
});

module.exports = router;
