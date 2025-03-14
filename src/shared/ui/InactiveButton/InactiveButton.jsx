import React from 'react'
import { classNames } from '../../lib/classNames/classNames'

import './InactiveButton.css'

const InactiveButton = ({className , children, ...other}) => {
  return (
    <button className={classNames('inactive-button', [className])} {...other}>
        {children}
    </button>
  )
}

export default InactiveButton