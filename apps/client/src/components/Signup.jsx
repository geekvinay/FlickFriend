import React, { useEffect, useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import {
  signInWithPopup,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged
} from 'firebase/auth'
import auth from '../../config/auth'

const provider = new GoogleAuthProvider()

const authenticate = () => {
  const auth = getAuth()
  signInWithPopup(auth, provider)
}

const Signup = () => {
  const [profile, setProfile] = useState({
    displayName: false,
    email: false,
    picture: false
  })

  const getUserDetails = async setProfile => {
    await onAuthStateChanged(auth, user => {
      if (user)
        setProfile({
          displayName: user.displayName,
          email: user.email,
          picture: user.photoURL
        })
    })
  }

  useEffect(() => {
    getUserDetails()
    console.log(profile)
  }, [])

  return (
    <div className='w-screen h-fit flex flex-col justify-center items-center text-center flex flex-col'>
      {console.log(profile.displayName)}
      {!profile.displayName ? (
        <article>
          <span>Please sign in to use the chat application.</span>
          <p
            className='flex items-center my-[4rem] px-4 py-2 border border-[2px] border-gray-400 rounded-3xl cursor-pointer'
            onClick={() => {
              authenticate()
            }}
          >
            <FcGoogle />
            <span className='px-4'>Sign in with google</span>
          </p>
        </article>
      ) : (
        ''
      )}
    </div>
  )
}

export default Signup
