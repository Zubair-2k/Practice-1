const handleSearch = async (event) =>{
    // console.log(event.target.value)

    let city_temp = document.querySelector(".city_temp")
    let city_name = document.querySelector(".city_name")
    let country_name = document.querySelector(".country_name")
    let latValue = document.querySelector(".latValue")
    let longValue = document.querySelector(".longValue")
    let humidityValue = document.querySelector(".humidityValue")
    let windSpeedValue = document.querySelector(".windSpeedValue")

    try{
        let response =await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&appid=a00298292db9840ab5ed42bc308deafe&units=Metric`)
        let data =await response.json()
        console.log(data)

        city_temp.textContent = data.main.temp + "'C";
        city_name.textContent = data.name;
        country_name.textContent = data.sys.country;
        latValue.textContent = data.coord.lat;
        longValue.textContent = data.coord.lon;
        humidityValue.textContent = data.main.humidity+"%";
        windSpeedValue.textContent = data.wind.speed+"km/hr";
    }
    catch{
        console.log("Error: ",error);
    }


}