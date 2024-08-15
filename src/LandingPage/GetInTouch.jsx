import React from 'react'

function GetInTouch() {
  return <>
  <div className="get_in_touch">
    <h2 className='sub_heading'>Get In Touch</h2>
    <form className='get_in_touch_form'>
        <label htmlFor="name">Name</label>
        <input type="text" />
        <label htmlFor="email">Email</label>
        <input type="email" />
        <label htmlFor="phoneNumber">Phone Number</label>
        <input type="text" />
        <label htmlFor="message">Message</label>
        <textarea type="text" />
        <button className='send_button'> Send Message</button>
    </form>
  </div>
  </>
}

export default GetInTouch