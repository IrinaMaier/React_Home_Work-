import React from 'react'
import styles from '../styles/UserItem.module.css'

const UserItem = ({name}) => {
     console.log('Rendering UserItem with name:', name);
  return <li className={styles.userItem}>{name || '(name)'}
  </li>;
};

export default UserItem