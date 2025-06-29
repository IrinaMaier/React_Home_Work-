import React from 'react'

const Content = () => {
  return (
    <div>
        <h1>{props.title}</h1>
        <p>{props.paragraph}</p>
        <img src={props.img} alt=''/>
    </div>
  )
}

export default Content