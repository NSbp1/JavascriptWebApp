// routes/appointments.js

const express = require('express');
const router = express.Router();
const Client = require('../models/client');
const Appointment = require('../models/appointment');
const { sendEmail } = require('../services/emailService');

router.post('/', async (req, res) => {

    const { name, email, phone, service,appointmentDate , appointmentTime} = req.body;
    console.log(name, email, phone, service,appointmentDate , appointmentTime);
    try {
      // Create a new client
      const client = await Client.create({ name, email, phone });
  
      // Create a new appointment
      const appointment = await Appointment.create({
        client_id: client.id,
        service: service,
        appointment_date: appointmentDate,
        appointment_time: appointmentTime,
        status: 'pending'
      });

      

      // Send confirmation email
      //const emailText = `Hello ${name},\n\nYour appointment for ${service} is confirmed for  ${appointmentDate} ${appointmentTime}.\n\nThank you!`;
      //await sendEmail(email, 'Appointment Confirmation', emailText);
  
      res.status(201).json({ message: 'Appointment added successfully', appointment });
    } catch (error) {
      console.error('Error adding appointment:', error);
      res.status(500).json({ error: 'An error occurred while adding the appointment' });
    }
  });


module.exports = router;
