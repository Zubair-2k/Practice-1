import React from 'react';
import ReactDOM from 'react-dom/client';
// import { QrCodeGen } from './assets/QrCodeGen'
import {BMI} from './assets/BMI/Bmi';
import './css/QrCodeGen.css'



// import './index.css';
// import { UserData } from './assets/UserData';
// import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <QrCodeGen/> */}
    <BMI />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

