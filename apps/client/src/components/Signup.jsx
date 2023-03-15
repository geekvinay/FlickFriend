import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { signInWithPopup, getAuth, GoogleAuthProvider } from 'firebase/auth'

const provider = new GoogleAuthProvider()

const authenticate = () => {
  const auth = getAuth()
  signInWithPopup(auth, provider)
}

const Signup = () => {
  return (
    <div className='w-screen h-fit flex flex-col justify-center items-center text-center flex flex-col'>
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
    </div>
  )
}

export default Signup
