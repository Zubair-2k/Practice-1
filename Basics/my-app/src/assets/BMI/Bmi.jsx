// import "../css/bmi.css"

export const BMI = () => {
  return (
    <>
    <div className='container'>
        <div className='cont-left'>
            <img src="my-app\src\img\Color-Car.jpg" alt="samp-img"></img>
        </div>
        <div className="cont-right">
            <h1>BMI Calculator</h1>
            <div className="inputField">
                <label htmlFor="height">Height(cm)</label>
                <input type="text" id="height"/>
                <label htmlFor="weight">Weight(kg)</label>
                <input type="text" id="weight"/>
            </div>
        </div>
    </div>
    </>
  )
}
