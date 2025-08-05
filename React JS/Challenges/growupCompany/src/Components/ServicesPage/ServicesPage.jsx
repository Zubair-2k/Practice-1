import React from 'react'
import "./ServicesPage.css"

const ServicesPage = () => {
  return (
    <>
        <div className='servicePage'>
            
            <div className="serviceHeader">Services</div>
            
            <div className="serviceContainer">
                
                <div className="eduServices">
                    <button className="eduSwipeBtn">
                        <button className='eduSwipeText'>Left</button>
                        </button>
                    <div className="eduContent">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro nam similique recusandae. Illum placeat ad perferendis, quo nihil sed, sequi explicabo quia praesentium, laboriosam consectetur beatae nam vitae blanditiis in inventore doloremque dolore corrupti repellendus. At qui unde modi porro.
                    </div>
                    <div className="eduImage">
                        <img src="poster2.jfif" alt="eduImg" className='eduImg'/></div>                
                </div>

                <div className="indusServices">
                    <div className="indusImage">
                        <img src="poster2.jfif" alt="indusImg" className='indusImg'/>
                    </div>                
                    <div className="indusContent">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, sint cum odio dignissimos ducimus facere, quibusdam fugit consequuntur necessitatibus adipisci corrupti magni natus, aliquid ipsa nostrum quas officia culpa possimus?
                    </div>
                    <button className="indusSwipeBtn">
                        <div className='indusSwipeText'>Right</div>
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default ServicesPage