import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const login = JSON.parse(localStorage.getItem('Login'))

  if (login === false || !login) {
    return <Navigate to='/' />
  }
  return (children)
}

export default ProtectedRoute