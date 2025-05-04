import React from 'react';
import styles from './styles.module.css'


const CitySelector = ({cities, onSelect}) => {
  return (
    <div className={styles.citySelector}>
        <h2>Выбрать город:</h2>
        <select onChange={(e)=>e.target.value && onSelect(e.target.value)}>
            <option value=''>выбрать город</option>
            {cities.map((city)=>(
                <option key={city.name} value={city.name}>
                    {city.name}
                </option>
            ))}
        </select>
    </div>
  )
}

export default CitySelector