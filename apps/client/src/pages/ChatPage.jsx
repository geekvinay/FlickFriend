import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Message from '../components/Message'

const ChatPage = () => {
  return (
    <div className='min-h-screen min-w-screen h-screen w-screen overflow-hidden  flex flex-col justify-between'>
      <Navbar />
      <div className='messages h-full w-full flex flex-col items-center'>
        <section className='relative chat--section h-[80vh] my-auto rounded-2xl w-full overflow-y-scroll max-w-[1080px] bg-gray-200 px-[2rem] py-[1rem] scroll-p-1'>
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
          <input
            type='text'
            placeholder='Type a message'
            className='static left-0 bottom-0 w-full px-8 py-2 border '
          />
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default ChatPage
