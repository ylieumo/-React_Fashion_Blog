import React from 'react'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'

const Main = (props) => {
  return (
    <div>
      {props.date}
      {props.description}
      {props.src}
      {props.text}

    </div>
  )
}

export default Main