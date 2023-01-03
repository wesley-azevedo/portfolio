import React from 'react'
import './portfolio.css'
import ImgPortfolio1 from '../../assets/portfolio1.jpg'
import ImgPortfolio2 from '../../assets/portfolio2.jpg'
import ImgPortfolio3 from '../../assets/portfolio3.jpg'
import ImgPortfolio4 from '../../assets/portfolio4.jpg'
import ImgPortfolio5 from '../../assets/portfolio5.jpg'
import ImgPortfolio6 from '../../assets/portfolio6.jpg'

function portfolio() {
  return (
    <section id='portifolio'>
      <h5>Meu</h5>
      <h2>Portifólio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div>
            <img className="portfolio__item-image" src={ImgPortfolio1} alt="Imagem Portfólio"/>
          </div>
          <h3>Título portifólio 1</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/wesley-azevedo" className='btn' target='_blank'>GitHub</a>
            <a href="https://dribbble.com/wesley-azevedo" className='btn btn-primary' target='_blank'>Ver</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div>
            <img className="portfolio__item-image" src={ImgPortfolio2} alt="Imagem Portfólio"/>
          </div>
          <h3>Título portifólio 2</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/wesley-azevedo" className='btn' target='_blank'>GitHub</a>
            <a href="https://dribbble.com/wesley-azevedo" className='btn btn-primary' target='_blank'>Ver</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div>
            <img className="portfolio__item-image" src={ImgPortfolio3} alt="Imagem Portfólio"/>
          </div>
          <h3>Título portifólio 3</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/wesley-azevedo" className='btn' target='_blank'>GitHub</a>
            <a href="https://dribbble.com/wesley-azevedo" className='btn btn-primary' target='_blank'>Ver</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div>
            <img className="portfolio__item-image" src={ImgPortfolio4} alt="Imagem Portfólio"/>
          </div>
          <h3>Título portifólio 4</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/wesley-azevedo" className='btn' target='_blank'>GitHub</a>
            <a href="https://dribbble.com/wesley-azevedo" className='btn btn-primary' target='_blank'>Ver</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div>
            <img className="portfolio__item-image" src={ImgPortfolio5} alt="Imagem Portfólio"/>
          </div>
          <h3>Título portifólio 5</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/wesley-azevedo" className='btn' target='_blank'>GitHub</a>
            <a href="https://dribbble.com/wesley-azevedo" className='btn btn-primary' target='_blank'>Ver</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div>
            <img className="portfolio__item-image" src={ImgPortfolio6} alt="Imagem Portfólio"/>
          </div>
          <h3>Título portifólio 6</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/wesley-azevedo" className='btn' target='_blank'>GitHub</a>
            <a href="https://dribbble.com/wesley-azevedo" className='btn btn-primary' target='_blank'>Ver</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default portfolio