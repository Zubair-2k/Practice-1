import './App.css';
import Header from './Header/Header';

function App() {
  const userDetails={
    name:"Zubair",
    age: 24,
    phone:"6374232052",
    email:"zubairarif2k@gmail.com"
  }
  return (
    <>
      <h1>Props</h1>
      <Header {...userDetails}/>

      {/* <Header name={userDetails.name} age={userDetails.age} phoneNo={userDetails.phone} email={userDetails.email}/> */}

    </>
  );
}

export default App;
