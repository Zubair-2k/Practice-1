import { useState } from "react";
import Login from "./Components/Login/Login";

function App() {
  const [toggle, setToggle] = useState(true)

  const handleLogin = () =>{
    setToggle((currVal)=>!currVal)
  }

  const handleSignup = () =>{
    setToggle((currVal)=>!currVal)
  }

  return (
    <div className="App">
      <h1>Login Page / Signup Page</h1>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleSignup}>Signup</button>
      <Login toggle={toggle}/>
    </div>
  );
}

export default App;
