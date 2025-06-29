import React from 'react';
import styles from './Contacts.module.css'
import snapchat from '../../assets/snapchat.svg'
import facebook1 from '../../assets/facebook1.svg'
import xIcon from '../../assets/x_icon.jpeg.svg'

const Contacts = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  
    alert('Форма отправлена!');
  };

  return (
    <section className={styles.contactsSection}>
      <div className={styles.contactsContainer}>
        <h1 className={styles.title}>Контакты</h1>
        
       <div className={styles.contactInfo}>
          <p className={styles.contactItem}>• 8 800 000 00 00</p>
          <p className={styles.contactItem}>• emailexample@email.com</p>
        </div>

        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <input 
            type="email" 
            placeholder="Введите ваш email" 
            className={styles.formInput}
            required
          />
          <input 
            type="text" 
            placeholder="Ваше имя" 
            className={styles.formInput}
          />
          <textarea 
            placeholder="Введите сообщение" 
            className={styles.formTextarea}
            required
          ></textarea>
          <button type="submit" className={styles.submitButton}>Отправить</button>
        </form>
      </div>

      <div className={styles.socialContainer}>
        <p>Найдите нас:</p>
        <div className={styles.socialIcons}>
           <a href="https://snapchat.com" target="_blank" rel="noopener noreferrer">
            <img src={snapchat} alt="Snapchat" className={styles.socialIcon} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={facebook1} alt="Facebook" className={styles.socialIcon} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={xIcon} alt="XIcon" className={styles.socialIcon} />
          </a>
         
        </div>
      </div>
    </section>
  );
};

export default Contacts;