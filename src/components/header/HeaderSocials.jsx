import React from 'react'
import {FaLinkedinIn} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {MdEmail} from "react-icons/md";

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/wesley-azevedo/" target="_blank"><FaLinkedinIn/></a>
      <a href="https://github.com/wesley-azevedo" target="_blank"><FaGithub/></a>
      <a href="mailto:contato@wesleyazevedo.pro.br"><MdEmail/></a>
    </div>
  )
}

export default HeaderSocials