import React from 'react'
import './about.css'
import {FaAward} from "react-icons/fa";
import {AiFillTrophy} from "react-icons/ai";
import {MdWork} from "react-icons/md";


export const about = () => {
  return (
    <section id='about'>
      <h5>Conheça</h5>
      <h2>Sobre Mim</h2>
      <div className="conteiner about__conteiner">
        <div className="about__me">
          <div className="about__me-image">
          </div>
        </div>
        <div>
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experiência</h5>
              <small>+15 aos de Experiência</small>
            </article>
            <article className="about__card">
              <AiFillTrophy className='about__icon'/>
              <h5>Expertise</h5>
              <small>Marketing e Programação</small>
            </article>
            <article className="about__card">
              <MdWork className='about__icon'/>
              <h5>Projects</h5>
              <small>Realizar Contagem</small>
            </article>
          </div>
          <div className="about__content">
            <div>
              <p>Profissional com carreira desenvolvida ao longo de 10 anos em empresas nacionais de grande e médio porte nas áreas de Publicidade, Varejo e Imóveis.</p>
              <p>Possuo graduação em Gestão de Marketing, MBA em Marketing de Varejo. Atualmente, curso MBA em Projetos de Aplicativos Móveis Multiplataformas e cursos técnicos em Desenvolvimento Full Stack e Data Science.</p>
              <p> Possuo expertise em liderança e treinamento de equipe, criação e coordenação de ações e estratégias de marketing multicanal, análise e definição de indicadores de desempenho, CRM, solução de problemas, identificação de oportunidades de melhoria, mitigação de riscos e desenvolvimento de ações para otimização e automação de processos.</p>
            </div>
            <div>
              <a href="#contacts" className='btn btn-primary'>Vamos Conversar?</a>
            </div>
          </div>
        </div>
      </div> 

    </section>
  )
}

export default about
