import React from 'react'
import './testemonials.css'
import ImgTestemonialAvatar1 from '../../assets/avatar1.jpg'
import ImgTestemonialAvatar2 from '../../assets/avatar2.jpg'
import ImgTestemonialAvatar3 from '../../assets/avatar3.jpg'
import ImgTestemonialAvatar4 from '../../assets/avatar4.jpg'
import ImgTestemonialAvatar5 from '../../assets/avatar5.jpg'

function testemonials() {
  const data: [
    {
      avatar: ImgTestemonialAvatar1,
      name__link: 'https://www.linkedin.com/in/any-kunz-jord%C3%A3o-40469999?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BbGs8es5GQCeo7lYNgYLxCQ%3D%3D',
      name: 'Any Kunz Kordão',
      position: 'Gerente de Atendimento Publicitário na ',
      company__link: 'https://www.linkedin.com/company/relevante-estrat%C3%A9gia-criativa/',
      company: 'Relevante Estratégia Criativa',
      review: 'O Wesley possui fortes competências técnicas e uma excelente visão estratégica e de negócio. Ele também possui qualidades enquanto pessoa, fundamentais em qualquer organização. Força, resiliência, empatia, simpatia e excelente capacidade de comunicação, são atributos que o acompanham no dia a dia. Trabalhamos juntos por um longo tempo e considero que o Wesley evoluiu rapidamente na sua carreira, constituindo um ativo de enorme valor para qualquer organização.'
    },
    {
      avatar: ImgTestemonialAvatar1,
      name__link: 'https://www.linkedin.com/in/any-kunz-jord%C3%A3o-40469999?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BbGs8es5GQCeo7lYNgYLxCQ%3D%3D',
      name: 'Any Kunz Kordão',
      position: 'Gerente de Atendimento Publicitário na ',
      company__link: 'https://www.linkedin.com/company/relevante-estrat%C3%A9gia-criativa/',
      company: 'Relevante Estratégia Criativa',
      review: 'O Wesley possui fortes competências técnicas e uma excelente visão estratégica e de negócio. Ele também possui qualidades enquanto pessoa, fundamentais em qualquer organização. Força, resiliência, empatia, simpatia e excelente capacidade de comunicação, são atributos que o acompanham no dia a dia. Trabalhamos juntos por um longo tempo e considero que o Wesley evoluiu rapidamente na sua carreira, constituindo um ativo de enorme valor para qualquer organização.'
    },
    {
      avatar: ImgTestemonialAvatar1,
      name__link: 'https://www.linkedin.com/in/any-kunz-jord%C3%A3o-40469999?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BbGs8es5GQCeo7lYNgYLxCQ%3D%3D',
      name: 'Any Kunz Kordão',
      position: 'Gerente de Atendimento Publicitário na ',
      company__link: 'https://www.linkedin.com/company/relevante-estrat%C3%A9gia-criativa/',
      company: 'Relevante Estratégia Criativa',
      review: 'O Wesley possui fortes competências técnicas e uma excelente visão estratégica e de negócio. Ele também possui qualidades enquanto pessoa, fundamentais em qualquer organização. Força, resiliência, empatia, simpatia e excelente capacidade de comunicação, são atributos que o acompanham no dia a dia. Trabalhamos juntos por um longo tempo e considero que o Wesley evoluiu rapidamente na sua carreira, constituindo um ativo de enorme valor para qualquer organização.'
    },
    {
      avatar: ImgTestemonialAvatar1,
      name__link: 'https://www.linkedin.com/in/any-kunz-jord%C3%A3o-40469999?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BbGs8es5GQCeo7lYNgYLxCQ%3D%3D',
      name: 'Any Kunz Kordão',
      position: 'Gerente de Atendimento Publicitário na ',
      company__link: 'https://www.linkedin.com/company/relevante-estrat%C3%A9gia-criativa/',
      company: 'Relevante Estratégia Criativa',
      review: 'O Wesley possui fortes competências técnicas e uma excelente visão estratégica e de negócio. Ele também possui qualidades enquanto pessoa, fundamentais em qualquer organização. Força, resiliência, empatia, simpatia e excelente capacidade de comunicação, são atributos que o acompanham no dia a dia. Trabalhamos juntos por um longo tempo e considero que o Wesley evoluiu rapidamente na sua carreira, constituindo um ativo de enorme valor para qualquer organização.'
    },
    {
      avatar: ImgTestemonialAvatar1,
      name__link: 'https://www.linkedin.com/in/any-kunz-jord%C3%A3o-40469999?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recommendations_details%3BbGs8es5GQCeo7lYNgYLxCQ%3D%3D',
      name: 'Any Kunz Kordão',
      position: 'Gerente de Atendimento Publicitário na ',
      company__link: 'https://www.linkedin.com/company/relevante-estrat%C3%A9gia-criativa/',
      company: 'Relevante Estratégia Criativa',
      review: 'O Wesley possui fortes competências técnicas e uma excelente visão estratégica e de negócio. Ele também possui qualidades enquanto pessoa, fundamentais em qualquer organização. Força, resiliência, empatia, simpatia e excelente capacidade de comunicação, são atributos que o acompanham no dia a dia. Trabalhamos juntos por um longo tempo e considero que o Wesley evoluiu rapidamente na sua carreira, constituindo um ativo de enorme valor para qualquer organização.'
    }
  ]


  return (
    <section id='testemonials'>
      <h5>Depoimentos</h5>
      <h2>Sobre Mim</h2>
      <div className="container testemonials__container">
        <article className='testemonial'>
          <div className="testemonial__avatar">
            <img src={ImgTestemonialAvatar1} alt="Any Kunz Jordão" />
          </div>
          <div className='testemonial__content'>
            <h3 className='testemonial__name'><a href="">Any Kunz Jordão</a></h3>
            <h5 className='testemonial__position'></a></h5>
            <small className='testemonial__review'>
           
            </small>
            </div>
        </article>
      </div>
    </section>
  )
}

export default testemonials