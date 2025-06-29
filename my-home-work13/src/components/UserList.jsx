import React from 'react'
import { connect } from 'react-redux'
import UserItem from './UserItem'
import styles from '../styles/UserList.module.css'

const UserList = ({users=[],filter=''}) => {
      console.log('Current users:', users);
      
    const filteredUsers=users.filter(user=> user.toLowerCase().includes(filter.toLowerCase())
)
  return (
    <ul className={styles.userList}>
        {filteredUsers.map((user,index)=>(
            <UserItem key={index} name={user}/>      
              ))}
    </ul>
  )
}
const mapStateToProps=(state)=>({
    users:state.users,
    filter:state.filter
})
export default connect(mapStateToProps)( UserList)