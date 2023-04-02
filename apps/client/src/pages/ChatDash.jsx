import React from 'react'

const ChatDash = () => {
  return (
    <div className='w-screen h-full flex flex-col items-center'>
      <section className='max-w-[1080px] h-full w-full grid grid-cols-1 grid-rows-3'>
        <div className='up--section row-start-1 row-span-1 flex justify-center items-center'>
          <button className='border-gray-400 border-[5px] text-gray-400 mx-4 font-bold text-2xl rounded-xl px-[4rem] py-[4rem]'>
            Start a Room
          </button>
          <button className='bg-gray-500 border-[5px] border-gray-500 mx-4 text-white font-bold text-2xl rounded-xl px-[4rem] py-[4rem]'>
            Join a Room
          </button>
        </div>
        <div className='down--section row-span-2'>
          <h2 className='text-2xl font-medium text-gray-700'>Your Rooms</h2>
          <div className='room--wrapper'></div>
        </div>
      </section>
    </div>
  )
}

export default ChatDash
