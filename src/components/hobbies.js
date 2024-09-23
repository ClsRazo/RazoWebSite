import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import '..//CSS/Hobbies.css'; // Asegúrate de tener un archivo CSS para los estilos

// Arreglo de imágenes para cada hobby
const hobbiesData = {
  bailar: ['bailar1.png', 'bailar2.png', 'bailar3.png'],
  videojuegos: ['videojuegos1.png', 'videojuegos2.png', 'videojuegos3.png'],
  dibujar: ['dibujar1.jpg', 'dibujar2.jpg', 'dibujar3.jpg'],
};

const Hobbies = () => {
  // Estados para las imágenes mostradas y el modal
  const [currentImage, setCurrentImage] = useState({ bailar: 0, videojuegos: 0, dibujar: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  // Efecto para cambiar las imágenes cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => ({
        bailar: (prev.bailar + 1) % hobbiesData.bailar.length,
        videojuegos: (prev.videojuegos + 1) % hobbiesData.videojuegos.length,
        dibujar: (prev.dibujar + 1) % hobbiesData.dibujar.length,
      }));
    }, 3000);

    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
  }, []);

  // Abrir el modal al hacer clic en una imagen
  const handleImageClick = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  return (
    <div className="hobbies-container">
      {/* Columna 1: Bailar */}
      <div className="hobby-column">
        <img
          src={require(`./../imagenes/${hobbiesData.bailar[currentImage.bailar]}`)}
          alt="Bailar"
          className="hobby-image"
          onClick={() => handleImageClick(hobbiesData.bailar[currentImage.bailar])}
        />
        <p>Amo la música y el baile, en especial la cumbia, la salsa (tanto tradicional como cubana) y el rock n roll. Bailar es una forma de expresión y una de mis actividades favoritas para relajarme y divertirme.</p>
      </div>

      {/* Columna 2: Jugar videojuegos */}
      <div className="hobby-column">
        <img
          src={require(`./../imagenes/${hobbiesData.videojuegos[currentImage.videojuegos]}`)}
          alt="Videojuegos"
          className="hobby-image"
          onClick={() => handleImageClick(hobbiesData.videojuegos[currentImage.videojuegos])}
        />
        <p>Los videojuegos siempre han sido una pasión para mí. Disfruto especialmente juegos como Fortnite y Minecraft, que me permiten interactuar con amigos y desarrollar habilidades estratégicas y creativas.</p>
      </div>

      {/* Columna 3: Dibujar */}
      <div className="hobby-column">
        <img
          src={require(`./../imagenes/${hobbiesData.dibujar[currentImage.dibujar]}`)}
          alt="Dibujar"
          className="hobby-image"
          onClick={() => handleImageClick(hobbiesData.dibujar[currentImage.dibujar])}
        />
        <p>El dibujo ha sido un hobby que me acompaña desde la primaria. Aunque he tenido periodos de pausa, siempre regreso a él como una forma de liberar mi imaginación y crear nuevos mundos en papel.</p>
      </div>

      {/* Modal para mostrar la imagen al hacer clic */}
      {/* <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Imagen Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <img src={`./imagenes/${modalImage}`} alt="Modal" className="modal-image" />
        <button onClick={() => setIsModalOpen(false)}>Cerrar</button>
      </Modal> */}
    </div>
  );
};

export default Hobbies;
