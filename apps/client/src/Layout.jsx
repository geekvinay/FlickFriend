import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useLocation } from 'react-router-dom'
import Home from './components/Home'
import Signup from './components/Signup'
import ChatPage from './pages/ChatPage'

const Layout = () => {
  const [path, setPath] = useState('')

  if (useLocation().pathname == '/signup')
    return (
      <div className='min-h-screen min-w-screen flex flex-col justify-between'>
        <Navbar />
        <Signup />
        <Footer />
      </div>
    )
  if (useLocation().pathname == '/chat') return <ChatPage />
  if (useLocation().pathname == '/')
    return (
      <div className='min-h-screen min-w-screen flex flex-col justify-between'>
        <Navbar />
        <Home />
        <Footer />
      </div>
    )
}

export default Layout
