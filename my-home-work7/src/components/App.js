import React,{createContext, useState} from "react";
import LanguageSwitcher from "../components/LanguageSwitcher";
import TextContent from "../components/TextContent";
import styles from '../styles/App.module.css'

export const LanguageContext= createContext();

function App() {
 
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'en' ? 'ru' : 'en'));
  };

  return (
   
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      <div className={styles.app}>
        <LanguageSwitcher />
        <TextContent />
      </div>
    </LanguageContext.Provider>
  );
}
export default App;