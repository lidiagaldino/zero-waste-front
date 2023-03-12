
import React from 'react'

import Login from './login/Login'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './home/Home'

import ProtectedRoutes from './ProtectedRoutes'

const Routess = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />

        <Route path='/home' element={
          <ProtectedRoutes>
            <Home />
          </ProtectedRoutes>

        } />

      </Routes>
    </Router>
  )
}

export default Routess