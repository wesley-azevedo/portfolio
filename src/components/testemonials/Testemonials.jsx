import React from 'react'
import './testemonials.css'
import ImgTestemonialAvatar1 from '../../assets/avatar1.jpg'
import ImgTestemonialAvatar2 from '../../assets/avatar2.jpg'
import ImgTestemonialAvatar3 from '../../assets/avatar3.jpg'
import ImgTestemonialAvatar4 from '../../assets/avatar4.jpg'
import ImgTestemonialAvatar5 from '../../assets/avatar5.jpg'

import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


function testemonials() {
  const data = [
    {
        "avatar": ImgTestemonialAvatar1,
        "name__link": "https://www.linkedin.com/in/any-kunz-jord%C3%A3o-40469999?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BbGs8es5GQCeo7lYNgYLxCQ%3D%3D",
        "name": "Any Kunz",
        "position": "Gerente de Atendimento Publicitário na ",
        "company__link": "https://www.linkedin.com/company/relevante-estrat%C3%A9gia-criativa/",
        "company": "Relevante Estratégia Criativa",
        "review": "O Wesley possui fortes competências técnicas e uma excelente visão estratégica de negócio. Enquanto pessoa, possui qualidades fundamentais em qualquer organização. Resiliência, empatia e excelente capacidade de comunicação, são atributos que o acompanham. Trabalhamos juntos por um longo tempo e considero que o Wesley evoluiu rapidamente na sua carreira, constituindo um ativo de enorme valor para qualquer organização."
    },
    {
        "avatar": ImgTestemonialAvatar2,
        "name__link": "https://www.linkedin.com/in/beatriz-msilva?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3Bp8VOseUFScCNcrGjh0wI2Q%3D%3D",
        "name": "Beatriz Mota",
        "position": "Associated Product Manager na ",
        "company__link": "https://www.linkedin.com/company/psicologia-viva/",
        "company": "Psicologia Viva (Psyalive)",
        "review": "Wesley tem grande conhecimento na área de marketing e processos voltados ao sucesso do cliente. Atua com brilhantismo em qualquer time que faça parte sempre pensando em fazer o melhor a cada dia."
    },
    {
        "avatar": ImgTestemonialAvatar3,
        "name__link": "https://www.linkedin.com/in/lailla-frota-68392b244?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BvuQvxKi0QYyfyEGJgm5xJQ%3D%3D",
        "name": "Lailla Frota",
        "position": "Auxiliar de Marketing na ",
        "company__link": "https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Aorganization%3A24504142&keywords=madre%20de%20deus%20-%20solu%C3%A7%C3%B5es%20imobili%C3%A1rias&origin=RICH_QUERY_SUGGESTION&position=0&searchId=e606e5aa-d7fa-418c-b704-ba48b41d93db&sid=mF9",
        "company": "Madre de Deus - Soluções Imobiliárias",
        "review": "Ele é um profissional maravilhoso. Sempre dedicado, focado e esforçado. Ele é aquele cara que se não souber a resposta naquele momento ele vai procurar e te responde assim que for possível. Sempre disposto a ajudar e guiar a equipe em prol do crescimento e desenvolvimento da empresa. É um líder que ressalta as qualidades e trabalha os pontos de melhoria, fazendo com que o ambiente seja harmonioso e eficiente. É um privilégio ter o Wesley como líder."
    },
    {
        "avatar": ImgTestemonialAvatar4,
        "name__link": "https://www.linkedin.com/in/monique-monteiro-259bb066?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BT5TUXfFoQ%2BKD3psysfyfNg%3D%3D",
        "name": "Monique Monteiro",
        "position": "Coordenadora de Backoffice na ",
        "company__link": "https://www.linkedin.com/company/wireoficial/",
        "company": "Mobwire",
        "review": "Wesley é um profissional altamente competente em tudo o que se propõe a fazer. Está sempre preocupado em desenvolver um trabalho de qualidade e se esforçando em buscar soluções que facilitem a produtividade do time em que está inserido, sem esquecer o lado humano, que é igualmente importante."
    },
    {
        "avatar": ImgTestemonialAvatar5,
        "name__link": "https://www.linkedin.com/in/m%C3%A1rcia-maia-738359a6?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BmEldMR76TpSgL%2FJ5%2F1PLpg%3D%3D",
        "name": "Márcia Maia",
        "position": "Gerente Comercial na ",
        "company__link": "https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Aorganization%3A24504142&keywords=madre%20de%20deus%20-%20solu%C3%A7%C3%B5es%20imobili%C3%A1rias&origin=RICH_QUERY_SUGGESTION&position=0&searchId=e606e5aa-d7fa-418c-b704-ba48b41d93db&sid=mF9",
        "company": "Madre de Deus - Soluções Imobiliárias",
        "review": "Wesley é totalmente focado em resultados! Tem maestria nos processos de marketing e controladoria. Inovação é com ele!"
    }
];

  return (
    <section id='testemonials'>
      <h5>Minhas</h5>
      <h2>Recomendações</h2>
      <Swiper className="container testemonials__container"
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
      >
      {
        data.map(({avatar, name__link, name, position, company__link, company, review}, index) => {
          return (
            <SwiperSlide key={index} className='testemonial'>
              <div className="testemonial__avatar">
                <img src={avatar} alt={name} />
              </div>
              <div className='testemonial__content'>
                <h3 className='testemonial__name'><a href={name__link}>{name}</a></h3>
                <h5 className='testemonia__position'>{position}<a href={company__link}>{company}</a></h5>
                <small className='testemonial__review'>{review}</small>
              </div>
            </SwiperSlide>
          )
        })
      }
      </Swiper>
    </section>
  )
}

export default testemonials