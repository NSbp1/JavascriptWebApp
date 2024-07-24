// src/components/BookingForm.js

import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [service, setService] = useState('');
    const [appointmentTime, setAppointmentTime] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Create a new client
            const clientResponse = await axios.post('http://localhost:3000/clients', {
                name,
                email,
                phone
            });
            const clientId = clientResponse.data.id;

            // Book an appointment for the client
            await axios.post('http://localhost:3000/appointments', {
                client_id: clientId,
                service,
                appointment_time: appointmentTime,
                status: 'Pending'
            });

            alert('Appointment booked successfully!');
        } catch (error) {
            console.error('Error booking appointment:', error);
            alert('Failed to book appointment. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            <select value={service} onChange={(e) => setService(e.target.value)} required>
                <option value="">Select Service</option>
                <option value="cut">Cut</option>
                <option value="trim">Trim</option>
                <option value="cut & dye">Cut & Dye</option>
                <option value="dye">Dye</option>
            </select>
            <input type="datetime-local" value={appointmentTime} onChange={(e) => setAppointmentTime(e.target.value)} required />
            <button type="submit">Book Appointment</button>
        </form>
    );
};

export default BookingForm;
