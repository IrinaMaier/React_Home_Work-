import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../../redux/slices/authSlice'
import { useNavigate } from 'react-router-dom'

const Registration = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(register({ email, password }))
    setEmail('')
    setPassword('')
    navigate('/login')
  }

  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          name="password"
          placeholder="Password"
        />
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  )
}

export default Registration
