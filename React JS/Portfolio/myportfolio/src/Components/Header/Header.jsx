import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <>
    <section id='homePage'>
      <div className='header_container'>
        <div className='header_intro'>
          <div className='intro'>I'm </div>

          <div className='myname'>Zubair A</div>

          <div className='job_desc'>
            <div className='job_desc_1'>Frontend Developer</div>
            <div className='job_separator'> and</div>
            <div classname='job_desc_2'>Data Engineer </div>
          </div>

          <a href='#contactPage' className='header_contact'>
            <button className='contact_btn'>
              Contact Me
            </button>
          </a>
          
        </div>
      </div>
      {/* <a href="/Zubair_A-Resume.pdf" download="Zubair_A_Resume.pdf">
        <button className='csv_btn_header'>
          <i class="fa-solid fa-cloud-arrow-down"></i>
          <p>CSV</p>
        </button>
      </a> */}
    </section>
    </>
  )
}

export default Header