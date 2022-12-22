import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAOorNSxcTkGz_s-BHufRQbRw3-MDTtJZQ",
  authDomain: "entregafinal-joelchaya.firebaseapp.com",
  projectId: "entregafinal-joelchaya",
  storageBucket: "entregafinal-joelchaya.appspot.com",
  messagingSenderId: "123248029480",
  appId: "1:123248029480:web:61be549289ed3a1775ea1d"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  {/* <React.StrictMode> */}
    <App />
 {/*  </React.StrictMode> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
