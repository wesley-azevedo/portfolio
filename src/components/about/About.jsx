import React from 'react'
import './about.css'
import MeImg from '../../assets/me-about.jpg'
import {FaAward} from "react-icons/fa";

export const about = () => {
  return (
    <section id='about'>
      <h5>Conheça</h5>
      <h2>Sobre Mim</h2>

      <div className="conteiner about__conteiner">
        <div className="about__me">
          <div className="about__me-image"></div>
          <img src={MeImg} alt="Imagem Sobre Wesley Azevedo"/>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experiência</h5>
              <small>+15 aos de Experiência</small>
            </article>
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experiência</h5>
              <small>+15 aos de Experiência</small>
            </article>
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experiência</h5>
              <small>+15 aos de Experiência</small>
            </article>
          </div>
        </div>
      </div> 

    </section>
  )
}

export default about
