import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styles from '../components/CatImage.module.css'

const CatImage = () => {
  const [catImage, setCatImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

    const fetchRandomCat=async()=>{ 
      setLoading(true)
      setError(null)

      try{
        const response =await axios.get('https://api.thecatapi.com/v1/images/search')
        setCatImage(response.data[0].url)
      } catch(err){
        setError('failed to load the kitty')
        console.error('Ошибка:', err)
      } finally {
        setLoading(false)
      }
    }
    
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Random Cat Image</h1>

        {loading && <p>Loading...</p>}

        {error && <p className={styles.error}>{error}</p>}

        {catImage && (
          <img
          src={catImage}
          alt='Random cat'
          className={styles.image}
          />
        )}


        <button
        onClick={fetchRandomCat}
        className={styles.button}
        disabled={loading}>
         {loading ? 'Loading...': 'Load New Image'}</button>
        </div>
  )
}

export default CatImage