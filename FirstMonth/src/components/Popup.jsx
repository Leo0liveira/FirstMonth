import React, { useRef, useEffect } from 'react';
import '../styles/Popup.css';
import profileVideo from '../assets/popupVideo.mp4';

function Popup({ isVisible, onClose }) {
  const videoRef = useRef(null);

  // Pausar o vídeo quando o popup for fechado
  useEffect(() => {
    if (!isVisible && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reinicia o vídeo
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <video 
          ref={videoRef} 
          src={profileVideo} 
          className="popup-video" 
          autoPlay 
          loop 
          muted 
        />
        <h1>🚨🚨🚨🚨</h1>
        <h2 className="popup-title">PARADA AI MESMO! ISSO É UM ASSALTO, ME PASSA TEU CORAÇÃO AGORA!</h2>
        <h1>✋😎🤚</h1>
        <button className="close-btn" onClick={onClose}>ENTREGAR CORAÇÃO 💖🔒💍 </button>
      </div>
    </div>
  );
}

export default Popup;
