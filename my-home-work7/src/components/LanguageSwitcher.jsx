import React, {useContext} from 'react'
import { LanguageContext } from '../components/App'
import styles from '../styles/LanguageSwitcher.module.css'

const LanguageSwitcher = () => {
    const{language, toggleLanguage}= useContext(LanguageContext);

  return (
    <button onClick ={toggleLanguage} className={styles.button}>
    {language === 'en' ? 'Switch to Russian' : 'Переключить на английский'}
    </button>
  )
}

export default LanguageSwitcher