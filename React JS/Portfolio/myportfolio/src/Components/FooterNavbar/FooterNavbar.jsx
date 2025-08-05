import React, { useState, useEffect, useRef } from 'react'
import "./FooterNavbar.css"

const Footer_Navbar = () => {
    const [activeSection, setActiveSection] = useState("homePage");
        const sectionRef = useRef({});
    
        useEffect(()=>{
            const sections = ["homePage","aboutPage","skillsPage","experiencePage","contactPage"]
    
            const observer = new IntersectionObserver((entries)=>{
                entries.forEach((entry)=>{
                    if(entry.isIntersecting){

                        console.log(entry.target.id)
                        setActiveSection(entry.target.id)
                    }
                });
    
            },{ threshold : 0.2 });
    
            sections.forEach((id)=>{
                const section = document.querySelector(`#${id}`)
                if(section){
                    sectionRef.current[id]= section;
                    // console.log("Observing section", id)
                    observer.observe(section);
                }
                else{
                    console.warn("Section not Found:",id)
                }
            });
    
            return () =>{
                observer.disconnect();
            }
    
        },[]);

    return (
        <>
            <div className='footer_navbar'>
                <div className="footer_navbar_container">
                    <ul className='footer_nav_items'>
                        <li className='footer_nav_item'>
                            <a href='#homePage'>
                                <i className={activeSection === "homePage" ? "fa-solid fa-house footer_navbar_logo_active" : "fa-solid fa-house"}></i>   
                            </a>
                            <span className={activeSection === "homePage" ? "footer_nav_logo_name footer_nav_logo_name_active" : "footer_nav_logo_name"}>Home</span>
                        </li>
                        
                        <li className='footer_nav_item' >
                            <a href='#aboutPage'>
                                <i className={activeSection === "aboutPage" ? "fa-solid fa-circle-user footer_navbar_logo_active" : "fa-solid fa-circle-user"}></i>
                            </a>
                            <span className={activeSection === "aboutPage" ? "footer_nav_logo_name footer_nav_logo_name_active" : "footer_nav_logo_name"}>About Me</span>
                        </li>

                        <li className='footer_nav_item' >
                            <a href='#skillsPage'>
                                <i className={activeSection === "skillsPage" ? "fa-solid fa-user footer_navbar_logo_active" : "fa-solid fa-user"}></i>
                            </a>
                            <span className={activeSection === "skillsPage" ? "footer_nav_logo_name footer_nav_logo_name_active" : "footer_nav_logo_name"}>My Skills</span>
                        </li>

                        <li className='footer_nav_item' >
                            <a href='#experiencePage'>
                                <i className={activeSection === "experiencePage" ? "fa-solid fa-screwdriver-wrench footer_navbar_logo_active" : "fa-solid fa-screwdriver-wrench"}></i>
                            </a>
                            <span className={activeSection === "experiencePage" ? "footer_nav_logo_name footer_nav_logo_name_active" : "footer_nav_logo_name"}>Experience</span>
                        </li>

                        <li className='footer_nav_item' >
                            <a href='#contactPage'>
                                <i className={activeSection === "contactPage" ? "fa-solid fa-address-card footer_navbar_logo_active" : "fa-solid fa-address-card"}></i>
                            </a>
                            <span className={activeSection === "contactPage" ? "footer_nav_logo_name footer_nav_logo_name_active" : "footer_nav_logo_name"}>Contact</span>    
                        </li>
                    </ul>
                </div>
                
            </div>
        </>
  )
}

export default Footer_Navbar