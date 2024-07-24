const express = require('express');
const router = express.Router();
const clientsController = require('../controllers/clientsController');
const Client = require('../models/client');
const { sendEmail } = require('../services/emailService');

router.post('/', clientsController.createClient);

// In routes/clients.js

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const client = await Client.findByPk(id);

        if (!client) {
            return res.status(404).json({ error: 'Client not found' });
        }

        await client.destroy();
        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/send-email', async (req, res) => {
    const { subject, text } = req.body;

    try {
        const clients = await Client.findAll({ attributes: ['email'] });

        const emailPromises = clients.map(client => {
            return sendEmail(client.email, subject, text);
        });

        await Promise.all(emailPromises);

        res.status(200).json({ message: 'Emails sent successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Endpoint to get frequent clients
router.get('/frequent', async (req, res) => {
    const threshold = parseInt(req.query.threshold) || 3; // Default threshold is 3

    try {
        const frequentClients = await Client.findFrequentClients(threshold);
        res.status(200).json(frequentClients);
    } catch (error) {
        console.error('Error retrieving frequent clients:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


module.exports = router;
