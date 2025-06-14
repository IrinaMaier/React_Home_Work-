import UserList from './UserList';
import { useCallback, useMemo, useState } from 'react';
import './App.css';

function App() {
  const userList=[
    {id:1, name:'Alice'},
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'David' },
    { id: 5, name: 'Eva' },
  ];

  const [filter, setFilter]=useState('');

  const filterUsers=useCallback((filterText)=>{
    return userList.filter((user)=>
    user.name.toLowerCase().includes(filterText.toLowerCase())
  )
}, [userList])

const filteredUsers=useMemo(()=>{
  return filterUsers(filter)
},[filter, filterUsers])


const handleInputChange=(e)=>{
  setFilter(e.target.value)
}

  return (
    <div style={{padding:'20px'}}>
      <h1>user filtering</h1> 
         {}
      <input
        type="text"
        placeholder="Введите имя"
        value={filter}
        onChange={handleInputChange}     
  />

      {}
      <UserList users={filteredUsers} />
    </div>
  );
}

export default App;
