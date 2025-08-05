import React, { useEffect, useRef, useState } from 'react'

import "./Navbar.css"



const Navbar = () => {

    const [activeSection, setActiveSection] = useState("homePage");
    const sectionRef = useRef({});

    useEffect(()=>{
        const sections = ["homePage","aboutPage","skillsPage","experiencePage","contactPage"]

        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if(entry.isIntersecting){
                    setActiveSection(entry.target.id)
                }
            });

        },{ threshold : 0.6 });

        sections.forEach((id)=>{
            const section = document.querySelector(`#${id}`)
            if(section){
                sectionRef.current[id]= section;
                observer.observe(section);
            }
        });

        return () =>{
            observer.disconnect();
        }

    },[]);

    return (
        <>
            <div className='navbar'>
                <img src="data:image/jpeg;base64,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"
                    alt="logo_img" className='logo_img' />



                <ul className='navbar_items'>

                    <li>
                        <a href="#homePage" className={activeSection === "homePage" ? "navbar_active" : ""}>Home</a>
                    </li>

                    <li>
                        <a href="#aboutPage" className={activeSection === "aboutPage" ? "navbar_active" : ""}>About</a>
                    </li>

                    <li>
                        <a href="#skillsPage" className={activeSection === "skillsPage" ? "navbar_active" : ""}>Skills</a>
                    </li>

                    <li>
                        <a href="#experiencePage" className={activeSection === "experiencePage" ? "navbar_active" : ""}>Experience</a>
                    </li>

                    <li>
                        <a href="#contactPage" className={activeSection === "contactPage" ? "navbar_active" : ""}>Contact</a>
                    </li>

                </ul>


                <a href="/Zubair_A-Resume.pdf" download="Zubair_A_Resume.pdf" className='csv_btn'>
                    <div className='csv_btn_container'>
                        <i className="fa-solid fa-cloud-arrow-down"></i>
                        <p>CV</p>
                    </div>
                </a>

                {/* <div className='toggle'>
                    <div className='toggle_btn'>
                        <div className="toggle_bar"></div>
                        <div className="toggle_bar"></div>
                        <div className="toggle_bar"></div>
                    </div> */}

                {/* <div className="close_btn">
                        <div className="close_bar"></div>
                    </div> */}

                {/* <div className='close_btn'>
                        <div className='close_bar_1'></div>
                        <div className="close_bar_2"></div>   
                    </div> */}

                {/* </div> */}


                {/* <div className='toggle'>
                    <label htmlFor="light">Light</label>
                    <div className='toggle_btn'>
                        <div className='light'></div>
                        <div className='dark'></div>
                    </div>
                    <label htmlFor="dark">Dark</label>
                </div> */}
            </div>
        </>
    )
}

export default Navbar