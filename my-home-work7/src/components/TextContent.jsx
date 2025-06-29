import React,{useContext} from 'react'
import { LanguageContext } from '../components/App'
import styles from '../styles/TextContent.module.css'

const content = {
   en: {
    title: 'Welcome!',
    description: 'This is a multilingual React app.'
  },
  ru: {
    title: 'Добро пожаловать!',
    description: 'Это многоязычное React-приложение.'
  }
};

export const TextContent = () => {
  const { language } = useContext(LanguageContext);
  const { title, description } = content[language];

  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};
export default TextContent;