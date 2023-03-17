import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import auth from '../../config/auth'
import { Link } from 'react-router-dom'

// React Component
const Navbar = () => {
  const [profile, setProfile] = useState({
    displayName: '',
    email: '',
    picture: ''
  })

  const getUserDetails = async setProfile => {
    await onAuthStateChanged(auth, user => {
      if (user) {
        console.log('user is present!!')
        console.log(user)
        setProfile({
          displayName: user.displayName,
          email: user.email,
          picture: user.photoURL
        })
      } else {
        console.log('User not present!!!')
      }
    })
  }

  // Hooks
  useEffect(() => {
    getUserDetails(setProfile)
    console.log(profile)
  }, [])

  return (
    <header className='h-[80px] w-screen shadow-sm shadow-dark-50 z-50'>
      <ul className='max-w-[1080px] h-full w-full mx-auto list-none flex justify-between items-center'>
        <Link
          to='/'
          className='cursor-pointer logo font-sans font-[900] text-[2rem] mr-auto'
        >
          FlickFriend
        </Link>
        <Link
          to='/signup'
          className='cursor-pointer text-base text-bg-dark-400 mx-4 font-sans font-semibold uppercase'
        >
          sign in
        </Link>
        <Link
          to='/'
          className='cursor-pointer text-base text-bg-dark-400 mx-4 font-sans font-semibold uppercase'
        >
          create account
        </Link>
        <Link
          to='/'
          className='cursor-pointer text-base text-bg-dark-400 mx-4 font-sans font-semibold uppercase'
        >
          films
        </Link>
        <li>
          <input
            type='text'
            name='search'
            id='search'
            className='border-[2px] border-gray-400 rounded-3xl py-1 px-5 text-base w-[12rem]'
          />
        </li>
        <li>
          <img
            src={profile.picture}
            alt=''
            className='h-[2rem] w-[2rem] rounded-2xl mx-4'
          />
        </li>
      </ul>
    </header>
  )
}

export default Navbar
