import React from 'react'

const Card = (props) => {
  return (
    <li>
        <h2>{props.title}</h2>
        <p>price{props.price}euro</p>
        <p> в наличии:{props.exist}</p>
    </li>
  )
}

export default Card