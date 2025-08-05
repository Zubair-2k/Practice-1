// import { useEffect } from 'react';
import './App.css';
import { useState,useRef } from 'react';

function App() {
  // const [input,setInput]=useState("");

  const inputRef= useRef();

  // useEffect(()=>{
  //   inputRef.current=input
  // },[input])

  console.log("getting rendered")

  const handleClick=()=>{
    inputRef.current.focus()
    console.log(inputRef.current.value)
  }
  
  return (
    <>
      <input 
      ref={inputRef} 
      type="text" 
      // value={input} 
      // onChange={(e)=>setInput(e.target.value)}
      />
      <button onClick={handleClick}>Show Value</button>
      {/* <h4>{input}</h4> */}
      {/* <h4>{inputRef.current?.value}</h4> */}
    </>
  );
}

export default App;
