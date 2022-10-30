import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//import CounterClass from "./components/CounterClass"
import CounterFunction from "./components/CounterFunction"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
   
  {/* <CounterClass/> */}
   <App />
  {/* <CounterFunction /> */}
 </React.StrictMode>
  
  
  // <div>
  //   <CounterFunction />
  // </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
