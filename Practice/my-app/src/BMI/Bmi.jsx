import { useState } from 'react'
import './Bmi.css'


export const Bmi = () => {

    const [height,setHeight]=useState("")
    const [weight,setWeight]=useState("")
    const [bmival,setBmival]=useState(null)
    const [status,setStatus]=useState("")
    const [errorMessage,setErrorMessage]=useState(false)

    const handleClick=()=>{
        if(height && weight){
            let heightInMeter = height / 100
            let bmi_output = weight / (heightInMeter*heightInMeter)

            setBmival(bmi_output.toFixed(2))

            if(bmi_output < 18.5)
            {
                setStatus("Under Weight")
            }
            else if(bmi_output >= 18.5 && bmi_output < 25)
            {
                setStatus("Normal Weight")
            }
            else if(bmi_output >=25 && bmi_output < 30)
            {
                setStatus("Over Weight")
            }
            else
            {
                setStatus("Obese")
            }
            setErrorMessage(false)
        }
        else
        {
            setBmival(null)
            setStatus("")
            setErrorMessage(true)
        }
    }

    const cancelClick=()=>{
        setHeight("")
        setWeight("")
        setBmival(null)
        setStatus("")
        setErrorMessage(false)
    }

  return (
    <>
        <div className='container'>
            <div className='img-container'>
            </div>
            <div className='input-container'>
                <h1>BMI Calculator</h1>
                {errorMessage && <p className='invalid_output'>Please enter the values in the input field</p>}
                <div className='input-field'>
                    <label htmlFor='height'>Height(cm) :</label>
                    <input type='text' id="height" value={height}onChange={(e)=>setHeight(e.target.value)}/>
                </div>

                <div className='input-field'>
                    <label htmlFor='weight'>Weight(kg) :</label>
                    <input type='text' id="weight" value={weight} onChange={(e)=>setWeight(e.target.value)}/>
                </div>

                <div className='btn-container'>
                    <button className='btn' onClick={handleClick}>Calculate BMI</button>
                    <button className='btn cancel' onClick={cancelClick}>Cancel</button>
                </div>

                {bmival && (<div className='output-container'>
                    <p className='bmi_output'>Your BMI is : {bmival}</p>
                    <p>Status : {status}</p>
                </div>)}

            </div>

        </div>
    </>
    
  )
}
