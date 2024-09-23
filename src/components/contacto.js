import React from "react";
import "..//CSS/Contacto.css";

const Contacto = () => {
    return (
      <div className="contacto-container">
        {/* Columna 1: Correo Electrónico */}
        <div className="contacto-column">
          <a href="mailto:carlosrazo2801@hotmail.com" target="_blank" rel="noopener noreferrer">
            <img
              src={require("./../imagenes/email.png")}
              alt="Correo Electrónico"
              className="contacto-image"
            />
          </a>
          <p>carlosrazo2801@hotmail.com</p>
        </div>
  
        {/* Columna 2: Facebook */}
        <div className="contacto-column">
          <a href="https://www.facebook.com/carlos.razo.359?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
            <img
              src={require("./../imagenes/facebook.png")}
              alt="Facebook"
              className="contacto-image"
            />
          </a>
          <p>Facebook</p>
        </div>
  
        {/* Columna 3: Instagram */}
        <div className="contacto-column">
          <a href="https://www.instagram.com/cls_razo.x?igsh=dmZkZDdhMzAycmhn&utm_source=qr" target="_blank" rel="noopener noreferrer">
            <img
              src={require("./../imagenes/instagram.png")}
              alt="Instagram"
              className="contacto-image"
            />
          </a>
          <p>Instagram</p>
        </div>
  
        {/* Columna 4: Twitter (X) */}
        <div className="contacto-column">
          <a href="https://x.com/Rxzooo_eXe" target="_blank" rel="noopener noreferrer">
            <img
              src={require("./../imagenes/twitter.png")}
              alt="Twitter"
              className="contacto-image"
            />
          </a>
          <p>Twitter (X)</p>
        </div>
      </div>
    );
  };
  
  export default Contacto;