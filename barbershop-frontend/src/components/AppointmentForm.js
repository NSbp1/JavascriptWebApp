import React, { useState } from 'react';
import axios from 'axios';
import './form.css';

const AppointmentForm = ({ onClose }) => { // Accept onClose as a prop

  const [successMessage, setSuccessMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    appointmentTime: '',
    appointmentDate: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Haircut',
    'Shave',
    'Haircut and Shave',
    'Beard Trim',
    'Facial',
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/appointments', formData);
      console.log('Appointment added successfully:', response.data);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          appointmentTime: '',
          appointmentDate: '',
        });
      }, 3000);
    } catch (error) {
      console.error('Error adding appointment:', error);
    }
  };

  return (
    <div className="form-container">
      {successMessage && <p className="success-message">{successMessage}</p>}
      {!successMessage && (
        <form onSubmit={handleSubmit}>
          <h2>Make an Appointment</h2>
          <div className="inputs">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            /><br/>
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            /><br/>
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            /><br/>
            <label>Time</label>
            <input
              type="time"
              name="appointmentTime"
              value={formData.appointmentTime}
              onChange={handleChange}
              required
            /><br/>
            <label>Date</label>
            <input
              type="date"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleChange}
              required
            /><br/>
            <label>Type of service</label>
            <div className="select1">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option className="select2" value="">
                  Select Service
                </option>
                {services.map((service, index) => (
                  <option key={index} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div><br/>
            <button type="submit">Add Appointment</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AppointmentForm;
