import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <>
      <section className='contact' id='contactPage'>
          <h1 className='contact_heading'>My Contact</h1>
          <div className="contact_container">
              <div className="get_in_touch">
                <h1>Get in Touch</h1>
                <p>Feel free to drop us a line below !</p>
                  
                <form className="get_in_touch_form">
                  <input type='text' name='name' placeholder='Your Name' autoComplete='true'/>
                  <input type='email' name='email' placeholder='Your Email' autoComplete='true'/>
                  <textarea name='message' placeholder='Typing your message here...'/>
                  <button className='send_contact'>Send</button>
                </form>

              </div>

              <div className="contactUs_page">
                <h3>Contact Us</h3>
                  
                <div className="contact_details">
                  <div className="contact_detail contact_address">
                    <i>@</i>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, atque.</p>
                  </div>

                  <div className="contact_detail contact_email">
                    <i>$</i>
                    <p>hello@email.com</p>
                  </div>

                  <div className="contact_detail contact_phone">
                    <i>#</i>
                    <p>+91 6372438452</p>
                  </div>

                  <div className="contact_detail contact_github">
                    <i>%</i>
                    <p>www.github.com</p>
                  </div>

                </div>

              </div>

            </div>

        </section>
      
        
      
    </>
  )
}

export default Contact