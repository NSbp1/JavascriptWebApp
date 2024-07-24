const Client = require('../../management/src/models/client');
const Appointment = require('../../management/src/models/Appointment'); // Ensure the correct path and casing

exports.getAllAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.findAll({
            include: {
                model: Client,
                as: 'Client', // Ensure this matches the alias used in associations.js
                attributes: ['name', 'email','phone'] // Adjust attributes as needed
            }
        });
        res.status(200).json(appointments);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.getAppointmentById = async (req, res) => {
    try {
        const appointment = await Appointment.findByPk(req.params.id);
        if (!appointment) {
            return res.status(404).json({ error: 'Appointment not found' });
        }
        res.status(200).json(appointment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateAppointment = async (req, res) => {
    const { name, email, phone, service,appointmentDate , appointmentTime} = req.body;

    try {
        const [updated] = await Appointment.update({service,appointmentDate , appointmentTime}, {
            where: { id: req.params.id }
        });
        const [updatedClient] = await Client.update(
            { name, email, phone },
            {
                where: { id: req.params.id }
            }
        );
        if (!updatedClient) {
         
            return res.status(404).json({ error: 'Customer not found' });
        }

       

        if (!updated) {
            return res.status(404).json({ error: 'Appointment not found' });
        }
        const updatedAppointment = await Appointment.findByPk(req.params.id);
        res.status(200).json(updatedAppointment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.deleteAppointment = async (req, res) => {
    try {
        const deleted = await Appointment.destroy({
            where: { id: req.params.id }
        });
        if (!deleted) {
            return res.status(404).json({ error: 'Appointment not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
