import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { initializeApp } from "firebase/app";
import App from './App';

const firebaseConfig = {
  apiKey: "AIzaSyB0fCKzXcB0QFu68TgMgN0TnpLel26OAJc",
  authDomain: "ecommerce-30e3f.firebaseapp.com",
  projectId: "ecommerce-30e3f",
  storageBucket: "ecommerce-30e3f.appspot.com",
  messagingSenderId: "214769084369",
  appId: "1:214769084369:web:41d0416a97dd797b10e2f0",
  measurementId: "G-NN5EWSR1DE"
};

initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)


