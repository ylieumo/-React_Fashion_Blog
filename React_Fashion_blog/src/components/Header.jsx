import React from 'react'
import Title from './Title.jsx'
import Subtitle from './SubTitle.jsx'
import List from './List.jsx'




const Header = (props) => {
  return (
    <div>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
    </div>
  )
}

export default Header