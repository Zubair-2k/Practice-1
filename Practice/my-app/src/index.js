import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Curr_con } from './Curr_converter/Curr_con';
// import {Bmi} from './BMI/Bmi'
// import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Bmi /> */}
    <Curr_con />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
