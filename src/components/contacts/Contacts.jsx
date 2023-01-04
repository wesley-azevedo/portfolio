import React from 'react'
import './contacts.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FaWhatsapp} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


export const contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xswvjpc', 'template_1rpxu04', form.current, 'az_MRfcbAuTVgFf5z')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };
  return (
    <section id='contacts'>
      <h5>Meus</h5>
      <h2>Contatos</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>contato@wesleyazevedo.pro.br</h5>
            <a href="mailto:contato@wesleyazevedo.pro.br" target="blank">Enviar Email</a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+55 (85) 99686-7979</h5>
            <a href="https://api.whatsapp.com/send?phone=5585996867979&text=Obrigado%20por%20chegar%20at%C3%A9%20aqui,%20aguardo%20o%20seu%20contato.%20Tenho%20certeza%20que,%20juntos,%20poderemos%20alcan%C3%A7ar%20resultados%20incr%C3%ADveis!" target="blank">Enviar WhatsApp</a>
          </article>
          <article className="contact__option">
            <BsLinkedin className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <h5>in/wesley-azevedo</h5>
            <a href="https://www.linkedin.com/messaging/thread/new?recipients=List(urn%3Ali%3Afsd_profile%3AACoAABW_m78B7BcsXleQAu7gvOlSZBIB5mz_goI)&composeOptionType=PREMIUM_INMAIL&controlUrn=topcard_secondary_compose_message_button&referringModuleKey=NON_SELF_PROFILE_VIEW&messageComposeFlowTrackingId=GGepHw1PQVKfDoLLY%2BFyew%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BvTqXOH73SlyO4hU%2B7UKOLQ%3D%3D" target="blank">Enviar Mensagem</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="Nome" placeholder='Nome e sobrenome' required/>
          <input type="email" name="Email" placeholder='Seu melhor email' required/>
          <input type="tel" name="Telefone" placeholder='Seu melhor telefone' required/>
          <textarea name="Mensagem" rows="7" placeholder='Sua mensagem' required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar Mensagem</button>
        </form>
      </div>
    </section>
  )
}

export default contacts