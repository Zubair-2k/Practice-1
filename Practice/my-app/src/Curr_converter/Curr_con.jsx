import { useEffect, useState } from "react"

import "./Curr-con.css"
export const Curr_con = () => {
  const [amount,setAmount]=useState(1)
  const [fromCurrency,setFromCurrency]=useState("USD")
  const [toCurrency,setToCurrrency]=useState("INR")
  const [convertedCurrency,setConvertedCurrency]=useState(null)
  const [exchangeRate,setExchangeRate]=useState(null) 

  const handleAmount=(e)=>{
    setAmount(e.target.value)
  }

  const handleFromCurrency=(e)=>{
    setFromCurrency(e.target.value)
  }

  const handleToCurrency=(e)=>{
    setToCurrrency(e.target.value)
  }

  useEffect(()=>{
    const getExchangeRate = async()=>
    {
      try
      {
      let url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
      let res =await fetch(url);
      let data= await res.json();
      setExchangeRate(data.rates[toCurrency])
      }
      catch(error)
      {
        console.error("Error Occurred : ",error)
      }
    }
    getExchangeRate();
  },[fromCurrency,toCurrency])

  useEffect(()=>{
    if(exchangeRate !== null)
    {
      setConvertedCurrency((amount * exchangeRate).toFixed(2))
    }
  },[amount,exchangeRate])

  return (
    <>
        <div className="container">
          <div className="header">
            <img src="Color-Gadgets.jpg" alt="curr_image" className="curr_img"/>
            <p>CURRENCY CONVERTER</p>
          </div>

          <div className="input-field">
            <label htmlFor="amnt">Amount :</label>
            <input type="number" id="amnt" value={amount} onChange={handleAmount}/>
          </div>

          <div className="input-field">
            <label>From Currency :</label>
            <select id="frm_curr" value={fromCurrency} onChange={handleFromCurrency}>
              <option value={"INR"}>INR - Indian Rupee</option>
              <option value={"USD"}>USD - United States Dollar</option>
              <option value={"EUR"}>EUR - Euro</option>
              <option value={"GBP"}>GBP - British Pound Sterling</option>
              <option value={"JPY"}>JPY - Japanese Yen</option>
              <option value={"AUD"}>AUD - Australian Dollar</option>
              <option value={"CAD"}>CAD - Canadian Dollar</option>
              <option value={"CNY"}>CNY - Chinese Yuan</option>
              <option value={"BRL"}>BRL - Brazilian Real</option>
              <option value={"ZAR"}>ZAR - South African Rand</option>
            </select>
          </div>

          <div className="input-field">
            <label>To Currency :</label>
            <select id="to_curr" value={toCurrency} onChange={handleToCurrency}>
              <option value={"INR"}>INR - Indian Rupee</option>
              <option value={"USD"}>USD - United States Dollar</option>
              <option value={"EUR"}>EUR - Euro</option>
              <option value={"GBP"}>GBP - British Pound Sterling</option>
              <option value={"JPY"}>JPY - Japanese Yen</option>
              <option value={"AUD"}>AUD - Australian Dollar</option>
              <option value={"CAD"}>CAD - Canadian Dollar</option>
              <option value={"CNY"}>CNY - Chinese Yuan</option>
              <option value={"BRL"}>BRL - Brazilian Real</option>
              <option value={"ZAR"}>ZAR - South African Rand</option>
            </select>
          </div>

          <div className="result">
            <p>{amount} {fromCurrency} is equal to {convertedCurrency} {toCurrency}</p>
          </div>

        </div>
    </>
  )
}
 
