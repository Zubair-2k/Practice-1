import './App.css';
import { useState } from 'react';

function App() {
  const [num,setNum]= useState(1)

  // Manually useState Function 

  // function useState(num){
  //   let currNum=num;
  //   function update(updatedNum){
  //     currNum = updatedNum;
  //   }
  //   return [currNum,update]
  // }
  // console.log(useState(10))

  return (
    <>
      <h1>{num}</h1>
      <button onClick={()=>setNum((currNum)=>currNum+1)}>Add</button>
    </>
  );
}

export default App;
