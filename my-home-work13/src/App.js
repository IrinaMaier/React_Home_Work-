import React from 'react';
import Filter from './components/Filter';
import UserList from './components/UserList';
import styles from './styles/App.module.css'


function App() {
  return (
    <div className={styles.app}>
      <h1>User Filter</h1>
      <Filter/>
      <UserList/>
    </div>
  );
}

export default App;
