// src/index.js
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database'); // Importing sequelize instance
const clientRoutes = require('./routes/clients');
const appointmentRoutes = require('./routes/appointments');
const listRoutes = require('./routes/list');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/clients', clientRoutes);
app.use('/appointments', appointmentRoutes);
app.use('/api/appointment', listRoutes); 

sequelize.sync({ force: true }).then(() => {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
});

