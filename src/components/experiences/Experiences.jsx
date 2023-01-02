import React from 'react'
import './experiences.css'
import {BsPatchCheckFill} from "react-icons/bs";

function experiences() {
  return (
    <section id='experiences'>
      <h5>Minhas</h5>
      <h2>Experiências</h2>

      <div className="conteiner experiences__conteiner">
        <div className="experiences__frontend">
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>HTML</h4>
                  <small className="text-light">+5 anos</small>
              </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className="text-light">+5 anos</small>
              </div>  
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>CSS Frameworks</h4>
                <small className="text-light">+5 anos</small>
              </div>  
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">+3 anos</small>
              </div>  
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className="text-light">+2 anos</small>
              </div>  
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Angular</h4>
                <small className="text-light">+2 anos</small>
              </div>  
            </article>
          </div>
        </div>
        <div className="experiences__backend">
          <h3>Backend Development</h3>
          <div className='experience__content'>
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Node</h4>
                <small className="text-light">+2 anos</small>
              </div>  
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>PHP</h4>
                <small className="text-light">-1 ano</small>
              </div>  
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Java</h4>
                <small className="text-light">-1 ano</small>
              </div>  
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">+1 ano</small>
              </div>  
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>NoSQL</h4>
                <small className="text-light">+1 ano</small>
              </div>  
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">+1 ano</small>
              </div>  
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experiences