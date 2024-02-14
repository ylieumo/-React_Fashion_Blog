import React from 'react'

const Footer = (props) => {
  return (
    <div className='footer'>
        <p>{props.footer}</p>
        <h3>{props.copyright}</h3>
        
    </div>
  )
}

export default Footer