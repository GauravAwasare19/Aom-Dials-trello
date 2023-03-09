import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css';
import App from './App'
import Login from './Login'
import Signup from './Signup'
import Main1 from './Main1';
import { BrowserRouter } from 'react-router-dom';



ReactDOM.createRoot(document.getElementById('root')).render(
  < >
  <BrowserRouter>
  <Main1 />
  </BrowserRouter>
  </>,
)
