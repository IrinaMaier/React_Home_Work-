import styles from '../styles/Card.module.css'
import React from 'react'
import appleIcon from '../assets/img/svg/aplle.svg'
import googleIcon from '../assets/img/svg/google.svg'
import xboxIcon from '../assets/img/svg/xxx.svg'
import spotifyLogo from '../assets/img/svg/spotify.svg'

const Card = () => {
  return (
    <div className={styles.cardContainer}>
      <img src={spotifyLogo} className={styles.spotifyLogo} />
      <h1 className={styles.title}>LIFE IS WASTED ON THE LIVING</h1>
      <p className={styles.subtitle}>Sign in <br />with</p>
      <div className={styles.ovalContainer}>
      <div className={styles.iconBox}>
        <img src={appleIcon} alt="Apple" className={styles.icon}/>
        <img src={googleIcon} alt="Google" className={styles.icon} />
        <img src={xboxIcon} alt="Xbox" className={styles.icon} />
      </div>
      </div>
    </div>
  )
}

export default Card