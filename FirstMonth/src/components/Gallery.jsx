import React from 'react';
import '../styles/Gallery.css';

const images = import.meta.glob('../assets/galeriaDeFotos/foto_*.jpg', { eager: true });

const descriptions = [
  "Eita como ele é sério",
  "Nosso momento inesquecível",
  "Um dia muito especial",
  "Que casal bonito do caralho",
  "Lembrança maravilhosa",
  "Nosso passeio perfeito",
  "Meu lugarzinho favorito",
  "Nosso amor em uma foto",
  "Skin Care Sério",
  "Skin Care Bobinho",
  "Iti que fofinhos eles",
  "Skin Care 😎😛",
  "O início de tudo",
  "Maravilhosa.jpg",
  "Maravilhosa_2.jpg",
  "Pré partida (foi dolorido viu?)",
  "Nossa primeira noite juntinhos",
  "Nós dois murchinhos",
  "Uma data especial",
  "Um dos melhores momentos registrados",
  "Nosso melhor registro",
  "Lindos demais, meu Deus"
];

const photos = Object.keys(images).map((path, index) => ({
  src: images[path].default,
  description: descriptions[index] || `Lembrança ${index + 1}`
}));

function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <h2>Galeria de Fotos</h2>
      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <div key={index} className="gallery-item">
            <img src={photo.src} alt={photo.description} />
            <p>{photo.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
