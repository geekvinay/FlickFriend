import React, { useState } from 'react'

const Message = ({ text, time, flag }) => {
  const [mess, setMess] = useState({
    text: 'This is a dummy message',
    time: '11/11/2003'
  })

  if (flag == 1)
    return (
      <article className='text-[#fff] bg-blue-500 max-w-[60%] px-4 py-2 rounded-tr-xl rounded-b-xl mr-auto mt-4'>
        {mess.text}
      </article>
    )

  if (flag == 2)
    return (
      <article className='text-[#fff] bg-gray-500 max-w-[60%] px-4 py-2 rounded-tl-xl rounded-b-xl ml-auto mt-4'>
        {mess.text}
      </article>
    )
}

export default Message
