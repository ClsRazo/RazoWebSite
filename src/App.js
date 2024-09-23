import React, { useState, useRef, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import FormacionAcademica from "./components/FormacionAcademica";
import Contacto from "./components/Contacto";
import Hobbies from "./components/Hobbies";
import Criptografia from "./components/Criptografia";
import "./CSS/App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const getPageTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Inicio";
      case "/formacion-academica":
        return "Formación Académica";
      case "/contacto":
        return "Contacto";
      case "/hobbies":
        return "Pasatiempos";
      case "/acerca-criptografia":
        return "Acerca de Criptografía";
      default:
        return "Inicio";
    }
  };

  return (
    <div className={`App ${menuOpen ? 'blur' : ''}`}>
      <header>
        <h1>{getPageTitle()}</h1>
      </header>

      <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
        ☰
      </div>

      <div ref={menuRef} className={`menu ${menuOpen ? 'open' : ''}`}>
        <nav>
          <ul>
            <li><a href="/" onClick={handleMenuToggle}>Inicio</a></li>
            <li><a href="/formacion-academica" onClick={handleMenuToggle}>Formación Académica</a></li>
            <li><a href="/contacto" onClick={handleMenuToggle}>Contacto</a></li>
            <li><a href="/hobbies" onClick={handleMenuToggle}>Pasatiempos</a></li>
            <li><a href="/acerca-criptografia" onClick={handleMenuToggle}>Acerca de Criptografía</a></li>
          </ul>
        </nav>
      </div>

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formacion-academica" element={<FormacionAcademica />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/acerca-criptografia" element={<Criptografia />} />
        </Routes>
      </div>

      <footer>
        <p>Carlos Gabriel Villarreal Razo - 2024. <br></br>© Derechos Reservados.</p>
      </footer>
    </div>
  );
}

export default App;
