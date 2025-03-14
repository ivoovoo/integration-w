import React from 'react'
import { Link } from 'react-router-dom'
import { links } from '../config/links'

const Navigation = () => {
  return (
    <nav className='footer__nav'>
       {links.map(({path, children }) => (<Link className='footer__link' key={path} path={path} to={path}>{children}</Link>))}
    </nav>
  )
}

export default Navigation