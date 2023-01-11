import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src="https://upload.wikimedia.org/wikipedia/en/4/4b/Sebastian_Stan_as_Bucky_Barnes.jpg" alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src="https://upload.wikimedia.org/wikipedia/en/4/4b/Sebastian_Stan_as_Bucky_Barnes.jpg" alt="" />
      </div>
    </div>
  )
}

export default Message