import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
        <nav className='navbarContainer'>
            <div className="logoNavbar">
                
                <div className="logo">
                    <img src="Growup_Logo.jpg" className='logoImg'/>

                    <div className="logoName">
                        <div className="logoNameHeading">Grow up</div>
                        <div className="logoNameDivider"></div>
                        <div className="logoSubNameHeading">Training and Placement Organisation</div>
                    </div>
                </div>

                

                <div className="navLinks">
                    <a href="#">HOME</a>
                    <a href="#">ABOUT</a>
                    <a href="#">CLIENTS</a>
                    <a href="#">SERVICES</a>
                    <a href="#">CONTACT</a>
                </div>
            
            </div>
        </nav>
    </>
  )
}

export default Navbar