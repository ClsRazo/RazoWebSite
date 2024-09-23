import React from "react";
import "./../CSS/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <div className="left-side">
        <div className="profile-photo">
          <img src={require("./../imagenes/fotoRazo.png")} alt="Carlos Gabriel Villarreal Razo" />
        </div>
        <h2>Carlos Gabriel Villarreal Razo</h2>
      </div>

      <div className="divider"></div>

      <div className="right-side">
        <ul className="section-list">
          <li>
            <Link to="/formacion-academica">
              <div className="section-icon">
                <img src={require("./../imagenes/formacionAcademica.png")} alt="Formación Académica" />
              </div>
              <span>Formación Académica</span>
            </Link>
          </li>
          <li>
            <Link to="/contacto">
              <div className="section-icon">
                <img src={require("./../imagenes/contacto.png")} alt="Contacto" />
              </div>
              <span>Contacto</span>
            </Link>
          </li>
          <li>
            <Link to="/hobbies">
              <div className="section-icon">
                <img src={require("./../imagenes/hobbies.png")} alt="Pasatiempos" />
              </div>
              <span>Pasatiempos</span>
            </Link>
          </li>
          <li>
            <Link to="/acerca-criptografia">
              <div className="section-icon">
                <img src={require("./../imagenes/acercaDe.png")} alt="Acerca de Criptografía" />
              </div>
              <span>Acerca de Criptografía</span>
            </Link>
          </li>
          <li>
            <a href={require("../varios/CV.pdf")} download={"CarlosGabrielVillarrealRazo_CV.pdf"}>
              <div className="section-icon">
                <img src={require("./../imagenes/CV.png")} alt="Descargar CV" />
              </div>
              <span>Descargar CV</span>
            </a>
          </li>
          <li>
            <a href="/">
              <div className="section-icon">
                <img src={require("./../imagenes/publicKey.png")} alt="Descargar Llave Pública" />
              </div>
              <span>Descargar Llave Pública</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
