import React, { useEffect, useState } from 'react'
import "./WeatherApp.css"

const WeatherApp = () => {
    const api_key = "a00298292db9840ab5ed42bc308deafe"
    const [cityValue,setCityValue] = useState("")
    const [dataValue,setdataValue] = useState([])
    const [loading,setLoading] = useState(true)

    const fetchData = async() =>{
        // setLoading(true)
        try{
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${api_key}&units=Metric`)
            const data = await response.json()
    
            console.log(data)
            setdataValue(data)
        }
        catch(error){
            console.log("Error : ", error )
        }
        setLoading(false)
    }

    useEffect(()=>{   
        fetchData();
    },[])

    console.log(cityValue)
    console.log(dataValue)

    const handleChange = (e) =>{
        setCityValue(e.target.value)
    }

    const handleEnter = (e) =>{
        if(e.key === "Enter"){
            fetchData();
        }
    }

    const handleSearch = () =>{
        fetchData();
    }

  return (
    <>
        <div className='weatherApp'>

            <h2 className='weatherAppHeading'>Weather App</h2>

            <div className="weatherAppContainer">
                
                <div className="searchCity">

                    <input type="text" placeholder="Search City" className='searchInput' onChange={()=>handleChange(event)} value={cityValue} onKeyDown={()=>handleEnter(event)}/>
                    <i className='searchIcon' onClick={handleSearch}>%</i>
                
                </div>

                {loading ? <h3>Loading...</h3>
                :
                dataValue.cod === '400' || dataValue.cod === "404" ?

                <div className='searchDetails'>
                    <h2 className='noDataFound'>No Data Found</h2>
                </div>
                
                :

                <div className="searchDetails">

                    <div className="searchValue">

                        <div className="tempValue">{dataValue.main?.temp}'C</div>
                        <div className="cityName">{dataValue.name}</div>
                        <div className="countryName">{dataValue.sys?.country}</div>
                    
                    </div>

                    <div className="latlong">

                        <div className="latDetails">
                            <div className="latHeading">latitude</div>
                            <div className="latValue">{dataValue.coord?.lat}</div>
                        </div>

                        <div className="longDetails">
                            <div className="longHeading">longtitude</div>
                            <div className="latValue">{dataValue.coord?.lon}</div>
                        </div>

                    </div>
                    
                    <div className="WindDetails">
                        
                        <div className="humidityDetails">
                            <div className="humidityValue">{dataValue.main?.humidity}%</div>
                            <div className="humidityHeading">Humidity</div>
                        </div>
                        
                        <div className="windSpeedDetails">
                            <div className="windSpeedValue">{dataValue.wind?.speed} Km/hr</div>
                            <div className="windSpeedHeading">Wind Speed</div>
                        </div>
                    
                    </div>

                </div>}
            
            </div>
        
        </div>
    </>


  )
}

export default WeatherApp