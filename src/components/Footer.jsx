import React from 'react'
import '../styles/Footer.css'
import Wave from '../assets/wave.png'
import Instagram from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'

const Footer = () => {
  return (
    <div className='footer'>
      <img src={Wave} alt=""  style={{width:'100%'}}/>
      <div className="f-content">
        <span>kuamilrazahaider@gmail.com</span>
        <div className="f-icon">
            <Instagram color='white' size='3rem'/>
            <Facebook color='white' size='3rem'/>
            <Github color='white' size='3rem'/>
        </div>
      </div>
    </div>
  )
}

export default Footer
