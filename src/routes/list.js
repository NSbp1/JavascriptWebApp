const express = require('express');
const router = express.Router();
const listController = require('../controllers/listController');


router.get('/', listController.getAllAppointments);
router.get('/:id', listController.getAppointmentById);
router.put('/:id', listController.updateAppointment);
router.delete('/:id', listController.deleteAppointment);


module.exports = router;
