import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Letters from './components/Letters';
import Popup from './components/Popup';
import Footer from './components/Footer';
import './styles/App.css';

import popupMusic from './assets/musica_popup.mp3';
import backgroundMusic from './assets/musica_fundo.mp3';
function App() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const popupAudioRef = useRef(null);
  const backgroundAudioRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setIsPopupVisible(true);
      if (popupAudioRef.current) {
        popupAudioRef.current.play();
      }
    }, 500);
  }, []);

  const closePopup = () => {
    setIsPopupVisible(false);

    if (popupAudioRef.current) {
      popupAudioRef.current.pause();
      popupAudioRef.current.currentTime = 0;
    }

    if (backgroundAudioRef.current) {
      backgroundAudioRef.current.play();
    }
  };

  return (
    <div className="app-container">
      <audio ref={popupAudioRef} src={popupMusic} autoPlay />
      <audio ref={backgroundAudioRef} src={backgroundMusic} loop />
      <Header />
      <main>
        <Letters />
        <Gallery />
      </main>
      <Popup isVisible={isPopupVisible} onClose={closePopup} />
      <Footer />
    </div>
  );
}

export default App;
