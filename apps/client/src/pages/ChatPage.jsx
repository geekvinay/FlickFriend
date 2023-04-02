import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Message from '../components/Message'

const ChatPage = () => {
  const [mess, setMess] = useState([
    ['This is a sample message', 1],
    ['This is a sample message', 2],
    ['This is a sample message', 1],
    ['This is a sample message', 2],
    ['This is a sample message', 1],
    ['This is a sample message', 2],
    ['This is a sample message', 1],
    ['This is a sample message', 2],
    ['This is a sample message', 1],
    ['This is a sample message', 2]
  ])

  return (
    <div className='min-h-screen min-w-screen h-screen w-screen overflow-hidden  flex flex-col justify-between'>
      <Navbar />
      <div className='messages h-full w-full flex flex-col  items-center bg-gray-200'>
        <section className='chat--section h-[70vh] my-auto w-full overflow-y-scroll scrollbar-hide scrollbar-hide max-w-[1080px] bg-[#fff] px-[1rem] py-[1rem]'>
          <Message text='This is a sample message' flag='1' />
          <Message text='This is a sample message' flag='1' />
          <Message text='This is a sample message' flag='1' />
          <Message text='This is a sample message' flag='1' />
          <Message text='This is a sample message' flag='1' />
          <Message text='This is a sample message' flag='1' />
          <Message text='This is a sample message' flag='1' />
          <Message text='This is a sample message' flag='1' />
          <Message text='This is a sample message' flag='2' />
          <Message text='This is a sample message' flag='1' />
          <Message text='This is a sample message' flag='2' />
          <Message text='This is a sample message' flag='1' />
          <Message text='This is a sample message' flag='2' />
        </section>
        <article className='input flex w-full max-w-[1080px] my-4'>
          <input
            type='text'
            placeholder='Type a message'
            className='static bg-[#fff] left-0 bottom-0 w-full px-8 py-2 border-2 rounded-lg mr-4'
          />
          <button className='bg-blue-700 text-[#fff] font-semibold text-lg px-[5rem] py-2 rounded-md'>
            Send
          </button>
        </article>
      </div>
      <Footer />
    </div>
  )
}

export default ChatPage
