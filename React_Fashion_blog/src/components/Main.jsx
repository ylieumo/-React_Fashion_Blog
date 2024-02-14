import React from 'react'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'

const Main = (props) => {
  return (
    <div >
      <h3>{props.date}</h3>
      <h2>{props.description}</h2>
      {props.src}
      <p>{props.text}</p>

    </div>
  )
}

export default Main