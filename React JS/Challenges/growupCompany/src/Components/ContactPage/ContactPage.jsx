import React from 'react'
import "./ContactPage.css"

const ContactPage = () => {
  return (
    <>
        <div className="contactPage">

          <div className="contactBgcolor"></div>

          <div className="getInTouchHeading">
            <h3>Get In Touch</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eveniet amet, perspiciatis fugiat minus voluptatem.</p>

          </div>
          
          
            <div className="contactContainer">
              

              <div className="contactInfo">
              
                <div className="contactHeader">
                  <h5>Contact Information</h5>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias adipisci beatae impedit nostrum voluptates a?</p>
                </div>

                <div className="contactInfoData">
                  
                  <div className="phoneInfo">
                    <div className="phoneLogo">@</div>
                    <div className="phoneNum">+91-6347289103</div>
                  </div>

                  <div className="emailInfo">
                    <div className="emailLogo">%</div>
                    <div className="emailID">growup@email.com</div>
                  </div>

                  <div className="locationInfo">
                    <div className="locationLogo">$</div>
                    <div className="locationAdd">Erode</div>
                  </div>
              
                </div>
              
              </div>

              <div className="getInTouchInput">

                <div className="nameEmailInput">

                  <div className="nameInput">
                    <label htmlFor="">Your Name</label>
                    <input type="text" name='name'className='nameInputField'/>
                  </div>

                  <div className="emailInput">
                    <label htmlFor="">Your Email</label>
                    <input type="text" name='email'className='emailInputField'/>
                  </div>

                </div>

                <div className="phoneInput">
                  <label htmlFor="">Mobile Number</label>
                  <input type="number" name='phoneNo'className='phoneInputField'/>
                </div>
                
                <div className="messageInput">
                  <label htmlFor="">Message</label>
                  <textarea name="message" id="messageField" className='messageTextField' placeholder='Write Down Your message'></textarea>
                </div>

                <button className='submitBtn'>
                  Send Message
                </button>

              </div>
            </div>
        </div>
    </>
  )
}

export default ContactPage