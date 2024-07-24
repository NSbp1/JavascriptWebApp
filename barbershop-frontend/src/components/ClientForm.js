// src/components/ClientForm.js
import React, { useState } from 'react';
import axios from 'axios';

const ClientForm = () => {
  const [client, setClient] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/clients', client);
      console.log('Client added successfully:', response.data);
    } catch (error) {
      console.error('Error adding client:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={client.name} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" value={client.email} onChange={handleChange} />
      <input type="text" name="phone" placeholder="Phone" value={client.phone} onChange={handleChange} />
      <button type="submit">Add Client</button>
    </form>
  );
};

export default ClientForm;
