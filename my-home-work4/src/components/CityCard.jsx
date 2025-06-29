import React from 'react'
import styles from './styles.module.css'

const CityCard = ({city}) => {
  return (
    <div className={styles.cityCard}>
    <h2>{city.name}</h2>
    <img src={city.imageUrl} alt={city.name} className={styles.cityImage}/>
    <p className={styles.cityDescription}>{city.description}</p>
    <ul className={styles.cityFacts}>
        {city.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
        </ul>
        </div>
      )
    }

export default CityCard;