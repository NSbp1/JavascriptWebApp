import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AppointmentUpdate.css';

const AppointmentUpdate = ({ toggle,rowData }) => { 

  const [successMessage, setSuccessMessage] = useState('');
  const [formData, setFormData] = useState ({
    name: '',
    email: '',
    service:'',
    status: '',
    phone: '',
    appointmentTime: '',
    appointmentDate: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const Statuses = [
    'Pending',
    'Done'
    
  ];

  useEffect(() => {
    if (rowData) {
      setFormData({
        name: rowData.Client.name,
        email: rowData.Client.email,
        service: rowData.service,
        status: rowData.status,
        phone: rowData.Client.phone,
        appointmentDate: rowData.appointment_date,
        appointmentTime: rowData.appointment_time
      });
    }
  }, [rowData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/appointment/${rowData.id}', formData);
      console.log('Appointment updated successfully:', response.data);
      setSuccessMessage('Appointment updated successfully:');
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
       
      }, 3000);
    } catch (error) {
      console.error('Error adding appointment:', error);
    }
  };

  

  return (
   <div className="modal-container"
   onClick={(e) => {
    if (e.target.className === "modal-container") toggle(true) ;
  }}
   >
      {successMessage && <p className="success-message">{successMessage}</p>}
      {!successMessage && (
        <div className="modal">
        <form onSubmit={handleSubmit} >
            
          <h2>Update</h2>
          <div className="form-group">
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
            <label>Service</label>
            <input
              type="text"
              name="service"
              placeholder="Service"
              value={formData.service}
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
            <label>Status</label>
            <div className="select1">
              <select
                name="status"
                value={formData.Statuses}
                onChange={handleChange}
                required
              >
                <option className="select2" value="">
                  Select status
                </option>
                {Statuses.map((Statuses, index) => (
                  <option key={index} value={Statuses}>
                    {Statuses}
                  </option>
                ))}
              </select>
            </div><br/>
            <button type="submit" >Add Appointment</button>
          </div>
        </form>
        </div>
      )}
      
    </div>
  );
};

export default AppointmentUpdate;
