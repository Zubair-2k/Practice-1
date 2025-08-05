import React from 'react'
import "./AboutUs.css"

const AboutUs = () => {
  return (
    <>
      <div className="aboutUs">
        <h2 className='aboutHeading'>About Us</h2>

        <div className="aboutContent">
        
          <div className="ceoContainer">
        
            <div className="ceoCard">
        
              <img src="poster2.jfif" alt="ceoProfileImg" className='ceoProfileImg'/>
        
              <div className="ceoDescription">
                
                <h4>CEO</h4>
                <p>Mr. Melvin Kumar</p>
              
              </div>
        
            </div>
        
            <div className="ceoContent">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum aperiam, eum vitae sunt, adipisci eius accusamus fugiat ipsam quasi quaerat repellendus, officia eveniet libero cumque voluptas debitis laudantium natus soluta dolor! Explicabo nemo libero hic in dolorum? Quos ipsum tenetur, ullam a ea eum vitae nisi perferendis fugiat dolorem maxime!
            </div>
        
          </div>

        </div>

        <div className="clientsCount">
        
          <div className="customerField">
    
            <div className="customerCount">50+</div>

            <div className="customerHead">Customers</div>
                      
          </div>

          <div className="customerField">
    
            <div className="customerCount">50+</div>

            <div className="customerHead">Customers</div>
                      
          </div>
          <div className="customerField">
    
            <div className="customerCount">50+</div>

            <div className="customerHead">Customers</div>
                      
          </div>
          <div className="customerField">
    
            <div className="customerCount">50+</div>

            <div className="customerHead">Customers</div>
                      
          </div>

        </div>
      
      </div>

      {/* <div className="coFounderContainer">
        <div className="coFounderContent">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum aperiam, eum vitae sunt, adipisci eius accusamus fugiat ipsam quasi quaerat repellendus, officia eveniet libero cumque voluptas debitis laudantium natus soluta dolor! Explicabo nemo libero hic in dolorum? Quos ipsum tenetur, ullam a ea eum vitae nisi perferendis fugiat dolorem maxime!
        </div>
        <div className="coFounderCard">
          <img src="poster2.jfif" alt="ceoProfileImg" className='ceoProfileImg'/>
          <div className="ceoDescription">
            
          </div>
        </div>
      </div> */}
    </>
  )
}

export default AboutUs