import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setUserInfo } from './redux/actions';

const UserForm = ({ setUserInfo }) => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {}
    if (!name.trim()) newErrors.name = 'Name is required'
    if (!status.trim()) newErrors.status = 'Status is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  };

  const handleSubmit = (e) => {
  e.preventDefault()
   if (validate()) { 
      setUserInfo({ name, status })
      setName('')
      setStatus('')
    }
  };
  

  return (
    <div>
      <h3>Edit User Information</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
        </div>
        <div>
          <label>Status:</label>
          <input
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          />
          {errors.status && <span style={{ color: 'red' }}>{errors.status}</span>}
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  setUserInfo
};

export default connect(null, mapDispatchToProps)(UserForm);