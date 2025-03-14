import React from 'react'
import Navigation from './Navigation'

import './Footer.css'
import Socials from './Socials'

const Footer = () => {
  const date = new Date()
  return (
    <footer className='footer'>
        <div className="container">
            <Navigation />
            <Socials />
            <p className='footer__copyright'>{date.getFullYear()} &copy; ИНТЕГРАЦИЯ судьбы</p>
        </div>
    </footer>
  )
}

export default Footer