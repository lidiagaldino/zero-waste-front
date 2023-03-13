
import React from 'react'

import Login from './login/Login'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './home/Home'

import ProtectedRoutes from './ProtectedRoutes'
import Profile from './profile/Profile'

const Routess = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />

        <Route path='/home' element={
          //<ProtectedRoutes>
            <Home />
          //</ProtectedRoutes>

        } />

        <Route path='/profile' element={
          //<ProtectedRoutes>
            <Profile />
          //</ProtectedRoutes>
        }/>
      </Routes>
    </Router>
  )
}

export default Routess