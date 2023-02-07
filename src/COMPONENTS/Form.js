import React from 'react'
import { useRef } from 'react'
import "./Form.css"

const Form = () => {
    const form = useRef()

    const sendEmail = () => {};
  return (
    <div className='form' style={{color:"white"}}>

        <form ref={form} onSubmit={sendEmail}>

            <label>Your Name</label>
            <input type="text" placeholder='Your Fullname'></input>

             <label>Email</label>
             <input type="email" placeholder='example@gmail.com'></input>

              <label>Subject</label>
             <input type="text" placeholder='subject of your message'></input>

              <label>Message</label>
              <textarea rows="6" columns="30" placeholder="Type your message here"/>

              <button>SUBMIT</button>
        </form>
      
    </div>
  )
}

export default Form
