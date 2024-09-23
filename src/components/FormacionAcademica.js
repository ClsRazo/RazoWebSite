import React from "react";
import "..//CSS/formacion.css";

const FormacionAcademica = () => {
  return (
    <div className="formacion-container">
      {/* Columna 1: Secundaria */}
      <div className="formacion-column">
        <img
          src={require("./../imagenes/secundaria.png")}
          alt="Secundaria"
          className="formacion-image"
        />
        <h3>Secundaria</h3>
        <p>
          Estudié la secundaria en la escuela República de Filipinas No. 87. Fue
          en esta etapa donde me adentré en el dibujo técnico y realista. Mis
          habilidades en matemáticas destacaron, y comencé a interesarme en la
          programación con ayuda de mi papá. Además, fui parte de la escolta.
        </p>
      </div>

      {/* Columna 2: Vocacional */}
      <div className="formacion-column">
        <img
          src={require("./../imagenes/vocacional.png")}
          alt="Vocacional"
          className="formacion-image"
        />
        <h3>Vocacional (CECyT 8)</h3>
        <p>
          En el CECyT 8, me desarrollé aún más en el dibujo y comencé a
          incursionar en el ámbito profesional de los videojuegos. Participé en
          un equipo de eSports y comencé a trabajar en proyectos de desarrollo
          de software, creando soluciones para empresas como Danza Studio 14.
        </p>
      </div>

      {/* Columna 3: Universidad */}
      <div className="formacion-column">
        <img
          src={require("./../imagenes/universidad.png")}
          alt="Universidad"
          className="formacion-image"
        />
        <h3>Universidad (ESCOM)</h3>
        <p>
          Actualmente, estoy cursando el 7mo semestre de Ingeniería en Sistemas
          Computacionales en la ESCOM. Los semestres más desafiantes fueron del
          4to al 6to, donde decidí enfocarme en ciberseguridad y aprendí varios
          lenguajes de programación de manera avanzada. También, estoy estudiando
          Python y Java por mi cuenta.
        </p>
      </div>
    </div>
  );
};

export default FormacionAcademica;