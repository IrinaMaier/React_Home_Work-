import { Route, Routes, BrowserRouter } from 'react-router-dom'
import HomePage from '../../pages/HomePage/HomePage'
import Authorization from '../../pages/Authorization/Authorization'
import Registration from '../../pages/Registration/Registration'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import UserProfile from '../../pages/UserProfile/UserProfile'
import Navigation from '../Navigation/Navigation'
import '../../styles/App.css'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Authorization />} />
        <Route path="/register" element={<Registration />} />
        <Route
          path="/user"
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
