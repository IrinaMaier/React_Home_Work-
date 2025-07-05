import { Link } from 'react-router-dom'
import styles from './Navigation.module.css'
const Navigation = () => {
  return (
    <nav className={`container ${styles.nav}`}>
      <Link to="/">Главная</Link>
      <Link to="/login">Авторизация</Link>
      <Link to="/register">Регистрация</Link>
      <Link to="/user">Личный Кабинет</Link>
    </nav>
  )
}

export default Navigation
