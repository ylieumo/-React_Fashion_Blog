import React from 'react'

const Article = (props) => {
  return (
    <div>
        <p>{props.date}</p>
        <p>{props.description}</p>
        <img src={props.src} alt={props.description} />
        <p>{props.text}</p>
        <p>{props.continue}</p>
    </div>
  )
}

export default Article