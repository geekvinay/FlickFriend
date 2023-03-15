import React from 'react'

const Navbar = () => {
  return (
    <header className='h-[80px] w-screen shadow-sm shadow-dark-50'>
      <ul className='max-w-[1080px] h-full w-full mx-auto list-none flex justify-between items-center'>
        <li className='cursor-pointer logo font-sans font-[900] text-[2rem] mr-auto'>
          FlickFriend
        </li>
        <li className='cursor-pointer text-base text-bg-dark-400 mx-4 font-sans font-semibold uppercase'>
          sign in
        </li>
        <li className='cursor-pointer text-base text-bg-dark-400 mx-4 font-sans font-semibold uppercase'>
          create account
        </li>
        <li className='cursor-pointer text-base text-bg-dark-400 mx-4 font-sans font-semibold uppercase'>
          films
        </li>
        <li>
          <input
            type='text'
            name='search'
            id='search'
            className='border-[2px] border-gray-400 rounded-3xl py-1 px-5 text-base w-[12rem]'
          />
        </li>
      </ul>
    </header>
  )
}

export default Navbar
