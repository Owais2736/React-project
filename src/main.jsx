import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import LeftNavbar from "./components/LeftNavbar"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar/>
  
  <LeftNavbar/>
  <App />
</BrowserRouter>,
)
