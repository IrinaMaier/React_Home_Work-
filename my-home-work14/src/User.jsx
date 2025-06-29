import React from 'react'
import { connect } from 'react-redux'

const User = ({name,status}) => {
    console.log('Полученные props:', { name, status });
   return (
    <div>
      <h2>User Profile</h2>
      {name && <p>Name: {name}</p>} {/* Показываем только если name существует */}
      <p>Status: {status || 'Не указан'}</p>
    </div>
  );
};
const mapStateToProps=(state)=>({
    name:state.name,
    status:state.status
})

export default connect(mapStateToProps)(User)