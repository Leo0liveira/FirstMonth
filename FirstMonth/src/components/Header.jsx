import React from 'react'
import '../styles/Header.css'
import tituloImage from '../assets/text.png';

function Header() {
  return (
    <header className="header">
        <img src={tituloImage} alt="Meu Amorzinho" className="header-title-img" />
       <nav className="header-nav">
         <a href="#letters">Cartinhas</a>
         <a href="#gallery">Fotos</a>
       </nav>
    </header>
  )
}

export default Header;
