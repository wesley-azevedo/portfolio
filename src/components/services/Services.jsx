import React from 'react'
import './services.css'
import {BiCheck} from "react-icons/bi";

function services() {
  return (
    <section className='container' id='services'>
      <h5>Meus</h5>
      <h2>Serviços</h2>
      <div className='services__container'>
        <article className='services'>
          <div className='service__head'>
            <h3>UI/UX Desing</h3>
          </div>
          <ul className='service__list'>
            <li>
              <p><BiCheck className='service__list-icon' />Desc. Serviço</p>
            </li>
            <li>
              <p><BiCheck className='service__list-icon' />Desc. Serviço</p>
            </li>
            <li>
              <p><BiCheck className='service__list-icon' />Desc. Serviço</p>
            </li>
            <li>
              <p><BiCheck className='service__list-icon' />Desc. Serviço</p>
            </li>
            <li>
              <p><BiCheck className='service__list-icon' />Desc. Serviço</p>
            </li>
            <li>
              <p><BiCheck className='service__list-icon' />Desc. Serviço</p>
            </li>
            <li>
              <p><BiCheck className='service__list-icon' />Desc. Serviço</p>
            </li>
          </ul>
        </article>
        <article className='services'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
          <li>
              <p><BiCheck className='service__list-icon' />Desc. Serviço</p>
            </li>
            <li>
              <p><BiCheck className='service__list-icon' />Desc. Serviço</p>
            </li>
            <li>
              <p><BiCheck className='service__list-icon' />Desc. Serviço</p>
            </li>
            <li>
              <p><BiCheck className='service__list-icon' />Desc. Serviço</p>
            </li>
            <li>
              <p><BiCheck className='service__list-icon' />Desc. Serviço</p>
            </li>
            <li>
              <p><BiCheck className='service__list-icon' />Desc. Serviço</p>
            </li>
            <li>
              <p><BiCheck className='service__list-icon' />Desc. Serviço</p>
            </li>
          </ul>
        </article>
        <article className='services'>
          <div className='service__head'>
            <h3>Marketing</h3>
          </div>
          <ul className='service__list'>
            <li>
              <p><BiCheck className='service__list-icon' />Desc. Serviço</p>
            </li>
            <li>
              <p><BiCheck className='service__list-icon' />Desc. Serviço</p>
            </li>
            <li>
              <p><BiCheck className='service__list-icon' />Desc. Serviço</p>
            </li>
            <li>
              <p><BiCheck className='service__list-icon' />Desc. Serviço</p>
            </li>
            <li>
              <p><BiCheck className='service__list-icon' />Desc. Serviço</p>
            </li>
            <li>
              <p><BiCheck className='service__list-icon' />Desc. Serviço</p>
            </li>
            <li>
              <p><BiCheck className='service__list-icon' />Desc. Serviço</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default services