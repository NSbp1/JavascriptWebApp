import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Widget from './components/Widget';
import AppointmentList from './components/AppointmentList';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
           <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/appointment">Appointments</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<Widget/>} /> 
          <Route path="/appointment" element={<AppointmentList/>} />
        </Routes>
      </div>
      </Router>
  );
}

export default App;
