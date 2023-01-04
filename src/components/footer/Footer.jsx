import React from 'react'
import './footer.css'
import {FaLinkedinIn} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaDribbble} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";


function footer() {
  return (
    <footer id='footer'>
      <a href="#" className='footer__logo'>Wesley Azevedo</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#experiences">Experiências</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testemonials">Recomendações</a></li>
        <li><a href="#contacts">Contato</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/wesley-azevedo/"><FaLinkedinIn /></a>
        <a href="https://github.com/wesley-azevedo"><FaGithub /></a>
        <a href="https://dribbble.com/wesley-azevedo"><FaDribbble /></a>
        <a href="https://www.instagram.com/wesleysazevedo/"><FaInstagram /></a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; Wesley Azevedo. Todos os direitos reservados.</small>
      </div>
    </footer>
  )
}

export default footer