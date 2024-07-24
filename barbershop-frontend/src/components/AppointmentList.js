import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AppointmentList.css';
import AppointmentUpdate from './AppointmentUpdate';
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";




export default function AppointmentManagement() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
     axios.get('http://localhost:3000/api/appointment')
      .then(response => {
        console.log('Appointments:', response.data);
        setAppointments(response.data);
      })
      .catch(error => console.error('Error fetching appointments:', error));
  }, []);

  const [showForm, setShowForm] = useState(false);
  const [editRow, setRowToEdit] = useState(null);

  const toggleupdate = (appointment) => {
    setRowToEdit(appointment);
    setShowForm(!showForm);
  };

  

  return (
    <div className="table-wrapper">

      <header className="bg-primary py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Appointment Management</h1>
        <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded-lg">Add Appointment</button>
      </header>
      
        <table className="table">
            <thead>
              <tr>
                <th className="expand">Name</th>
                <th className="expand">Email</th>
                <th className="text-left">Service</th>
                <th className="text-left">Status</th>
                <th className="text-left">Phone Number</th>
                <th className="text-left">Time</th>
                <th className="text-left">Date</th>
                <th className="text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map(appointment => (
                <tr key={appointment.id}>
                  <td className="expand">{appointment.Client.name}</td>
                  <td className="expand">{appointment.Client.email}</td>
                  <td>{appointment.service}</td>
                  <td>{appointment.status}</td>
                  <td>{appointment.Client.phone}</td>
                  <td>{new Date(appointment.appointment_date).toLocaleDateString()}</td>
                  <td>{new Date(appointment.appointment_time).toLocaleTimeString()}</td>
                 
                
                  <td className="fit">
                  <span className="actions">
                    <BsFillTrashFill
                      className="delete-btn"
                    />
                    <BsFillPencilFill
                      className="edit-btn"
                      onClick={() => toggleupdate(appointment)}
                    />
                  </span>
                </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="updateForm">
          {showForm && (<AppointmentUpdate 
          rowData={editRow} 
          toggle={toggleupdate} 
          //appointmentId={editRow.id} 
          />)}
          </div>
        </div>
  );
}
