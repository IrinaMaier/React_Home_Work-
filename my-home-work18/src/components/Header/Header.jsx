import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Header/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerWrapper}`}>
        <NavLink to="/" className={styles.titleLink}>
          <h1 className={styles.title}>Сникерс - магазин</h1>
        </NavLink>
        
        <nav className={styles.navigation}>
          <NavLink
            end
            className={({ isActive }) => 
              isActive ? styles.activeLink : styles.navLink
            }
            to="/"
          >
            Главная
          </NavLink>
          <NavLink
            className={({ isActive }) => 
              isActive ? styles.activeLink : styles.navLink
            }
            to="/cart"
          >
            Корзина
          </NavLink>
          <NavLink
            className={({ isActive }) => 
              isActive ? styles.activeLink : styles.navLink
            }
            to="/contacts"  // Исправлено с "/news" на "/contacts" для соответствия
          >
            Контакты
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;