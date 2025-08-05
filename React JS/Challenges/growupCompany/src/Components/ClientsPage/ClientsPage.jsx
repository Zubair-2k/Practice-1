import React from 'react'
import "./ClientsPage.css"

const ClientsPage = () => {

  const logos = ["logo-1","logo-2","logo-3","logo-4","logo-5","logo-6","logo-7","logo-8","logo-9","logo-10"] 

  const reviewContent = [
    {
      profile_img:"",
      name: "Johm Doe",
      Occupation: "Web Developer",
      Message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, expedita. Beatae vitae ducimus officia. Magni voluptate incidunt delectus officia inventore, ut dolor magnam architecto et! Laudantium maiores nam repellat consequuntur?",
      rating: "4",
    }
  ]

  return (
    <>
        <div className="clientContainer">

          <div className="clientBgcolor"></div>

            <h2>Clients</h2>
            
            <div className="clientLogos">
              {[...logos, ...logos].map((logo,index)=>(
                <div className="logo" key={index}>
                  {logo}
                </div>  
              ))}
            </div>

            <div className="reviews">

              <button className='prevBtn'>P</button>

              <div className="reviewCard">
              
                <div className="reviewProfile">

                  <div className="profileImg">
                    <img src="" alt="" />
                  </div>

                  <div className="profileDetails">
                    <div className="profileName">John Doe</div>
                    <div className="profileOccupation">Web Designer</div>
                  </div>

                </div>

                <div className="reviewContent">
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi iusto provident, amet libero consectetur nostrum!</p>
                </div>

                <div className="ratingsDate">
                  <div className="ratings">
                    <p>&#9733;</p>
                    <p>&#9733;</p>
                    <p>&#9733;</p>
                    <p>&#9734;</p>
                    <p>&#9734;</p>
                  </div>
                  <div className="Date"></div>
                </div>

              </div>

              <div className="reviewCard">
              
                <div className="reviewProfile">

                  <div className="profileImg">
                    <img src="" alt="" />
                  </div>

                  <div className="profileDetails">
                    <div className="profileName">Sameer A</div>
                    <div className="profileOccupation">Python Developer</div>
                  </div>

                </div>

                <div className="reviewContent">
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi iusto provident, amet libero consectetur nostrum!</p>
                </div>

                <div className="ratingsDate">
                  <div className="ratings">
                    <p>&#9733;</p>
                    <p>&#9733;</p>
                    <p>&#9733;</p>
                    <p>&#9733;</p>
                    <p>&#9733;</p>
                  </div>
                  <div className="Date"></div>
                </div>

              </div>

              <div className="reviewCard">
              
                <div className="reviewProfile">

                  <div className="profileImg">
                    <img src="" alt="" />
                  </div>

                  <div className="profileDetails">
                    <div className="profileName">Suganneshan M</div>
                    <div className="profileOccupation">Team Manager</div>
                  </div>

                </div>

                <div className="reviewContent">
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi iusto provident, amet libero consectetur nostrum!</p>
                </div>

                <div className="ratingsDate">
                  <div className="ratings">
                    <p>&#9733;</p>
                    <p>&#9733;</p>
                    <p>&#9733;</p>
                    <p>&#9733;</p>
                    <p>&#9734;</p>
                  </div>
                  <div className="Date"></div>
                </div>

              </div>

              <button className='nextBtn'>N</button>
            
            </div>
        </div>
    </>
  )
}

export default ClientsPage