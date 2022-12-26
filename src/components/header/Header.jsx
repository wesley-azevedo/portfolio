import React from 'react'
import './header.css'
import CTA from './CTA'
import MeImg from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import {BsArrowRight} from 'react-icons/bs'

function header() {
  return (
    <header>
      <div className="conteiner header__conteiner">
        <h5>Olá, mundo! 👋</h5>
        <h1>Sou Wesley Azevedo.</h1>
        <h5 className="text-light">Fron-End Developer</h5>
        <CTA />
        <HeaderSocials />
        
        <div className='me'>
          <img src={MeImg} alt="" className='img'/>
        </div>

        <a href="#contacts" className="scroll__down">Veja Mais<BsArrowRight/></a>

      </div>
    </header>
  )
}

export default header