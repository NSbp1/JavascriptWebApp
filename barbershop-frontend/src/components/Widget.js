import React, { useState } from 'react';
import AppointmentForm from './AppointmentForm';
import highfade from './pics/highFade.png';
import chiskop from './pics/chiskop.png';
import lowcut from './pics/lowCut.png';
import fade from './pics/fade.png';
import logo from './pics/logo.png';
import './Widget.css';


export default function Widget() {
  
  //toggle on and off form
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-12 w-12" />
          <h1 className="text-4xl font-bold">PH Barbershop </h1>
        
        </div>
       
      </header>
      <main className="p-8">
        <section className="flex flex-col md:flex-row justify-between items-center">
          <div className="max-w-lg">
            <h1 className="text-4xl font-bold">get your perfect haircut now!</h1>
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/80" onClick={toggleForm}>Make an apointment</button>

            <p className="mt-4 text-muted-foreground">Check out our Legendary styles that would best suit you.</p>
       
            {showForm && <AppointmentForm />}
            <div className="flex space-x-2 mt-4">
           
            </div>
          </div>
          <div className="flex space-x-4 mt-8 md:mt-0">
            <div className="bg-card p-4 rounded-lg shadow-lg">
              <img src= {chiskop} alt="Adult Haircut - Fade" className="rounded-lg" />
              <h2 className="mt-4 text-lg font-semibold">ADULT HAIRCUT • FADE</h2>
              <p className="text-primary text-xl font-bold">R170</p>
            </div>
            <div className="bg-card p-4 rounded-lg shadow-lg">
              <img src={fade}alt="Beard Shave - Clipper" className="rounded-lg" />
              <h2 className="mt-4 text-lg font-semibold">BEARD SHAVE • CLIPPER</h2>
              <p className="text-primary text-xl font-bold">R40</p>
            </div>
            <div className="bg-card p-4 rounded-lg shadow-lg">
              <img src={lowcut}alt="Beard Shave - Clipper" className="rounded-lg" />
              <h2 className="mt-4 text-lg font-semibold">BEARD SHAVE • CLIPPER</h2>
              <p className="text-primary text-xl font-bold">R40</p>
            </div>
            <div className="bg-card p-4 rounded-lg shadow-lg">
              <img src={highfade}alt="Beard Shave - Clipper" className="rounded-lg" />
              <h2 className="mt-4 text-lg font-semibold">BEARD SHAVE • CLIPPER</h2>
              <p className="text-primary text-xl font-bold">R40</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
