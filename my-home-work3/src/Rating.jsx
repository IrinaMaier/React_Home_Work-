import React, {useState} from 'react';
import '../src/Rating.css';


const ratingList = [

    'https://www.clipartmax.com/middle/m2i8H7A0A0Z5A0K9_5-star-rating-png',

    'https://www.clipartmax.com/png/small/67-676956_out-of-3-out-of-5-star-rating.png',

    'https://www.clipartmax.com/png/small/73-731815_stars-clipart-2-5-star-rating.png',

    'https://www.clipartmax.com/png/small/297-2970338_rating-2-out-of-5-gold-stars.png'

  ]

const Rating=()=>{
   const [ratingValue,setRatingValue] =useState(0)

   const handleRatingChange=(newValue)=>{
    setRatingValue(newValue)
   }

   return(
    <div className= 'rating-container'>
        <h2>Rate our service</h2>

    <img 
    src="{ratingList[ratingValue]}" 
    alt={`Stars ${ratingValue+1} from ${ratingList.length}`} 
    className='rating-image'
    />

    <div className="buttons-container">

        <button 
          onClick={() => handleRatingChange(3)}
          className={`rating-button ${ratingValue === 3 ? 'active' : ''}`}>
            Excellent
            </button>
            <button 
          onClick={() => handleRatingChange(2)}
          className={`rating-button ${ratingValue === 2 ? 'active' : ''}`}>
           Good
         </button>
        <button 
          onClick={() => handleRatingChange(1)}
          className={`rating-button ${ratingValue === 1 ? 'active' : ''}`}>
          Fair
            </button>
            <button 
          onClick={() => handleRatingChange(0)}
          className={`rating-button ${ratingValue === 0 ? 'active' : ''}`}>
           Poor
            </button>
         </div>
         <p className="current-rating">
         Current rating: {ratingValue + 1} из {ratingList.length}
      </p>
    </div>
  );
};

export default Rating;