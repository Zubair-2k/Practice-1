import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [num1,setNum1]=useState(100)
  const [num2,setNum2]=useState(200)

  useEffect(()=>{
    console.log("Num1 Added")
    setNum1((curr)=>curr+1)

    return()=>{
      setNum1(100);
      console.log("Memory Cleanup")
    }
  },[num2])

  return (
      <>
        <button onClick={()=>setNum1((curr)=>curr+1)}>{num1}</button>
        <button onClick={()=>setNum2((curr)=>curr+1)}>{num2}</button>
      </>
    );
}

export default App;