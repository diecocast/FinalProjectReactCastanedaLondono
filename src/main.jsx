import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCcv07rDQMil6XVAL7T0BQ0cJLeKjh_Ijw",
  authDomain: "reactecommerse.firebaseapp.com",
  projectId: "reactecommerse",
  storageBucket: "reactecommerse.appspot.com",
  messagingSenderId: "860049707099",
  appId: "1:860049707099:web:83acffaf6fa8a6b85b6f7e"
};

initializeApp(firebaseConfig);
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
