/**
 * Vamos a crear rutas del servidor.
 * Creamos un módulo por eso utilizamos express.
 * Vamos a utilizarlo como nuestra REST API para 
 * enviar y recibir datos en formato JSON.
 */

const express = require('express');
const router = express.Router();

// Ejemplo para responder a una solicitud GET a la ruta raíz '/'
router.get('/', (req, res) => {  
  try {
    // Enviar una respuesta en formato JSON
    res.status(200).json({
      status: 'API REST funcionando'
    });
  } catch (error) {
    // Manejo básico de errores
    res.status(500).json({
      status: 'Error',
      message: error.message
    });
  }
});

module.exports = router;
