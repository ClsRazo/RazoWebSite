import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import home from './components/home';
import formacion from './components/formacion';
import contacto from './components/contacto';
import hobbies from './components/hobbies';
import criptografia from './components/criptografia';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<home />} />
        <Route path="/FormacionAcademica" element={<formacionAcademica />} />
        <Route path="/Contacto" element={<contacto />} />
        <Route path="/Hobbies" element={<hobbies />} />
        <Route path="/Criptografia" element={<criptografia />} />
      </Routes>
    </Router>
  );
}

export default App;
