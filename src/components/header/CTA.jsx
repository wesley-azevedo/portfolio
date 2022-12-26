import React from 'react'
import Resume from '../../assets/Resume_Wesley_Azevedo.pdf'

function CTA() {
  return (
    <div className="cta">
        <a href={Resume} download className='btn'>Download Resumé</a>
        <a href="#contacts" className='btn btn-primary'>Vamos conversar?</a>
    </div>
  )
}

export default CTA