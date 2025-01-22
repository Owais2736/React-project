import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import LeftNavbar from "./components/LeftNavbar"
import Booking from './pages/Booking/Booking.jsx';
import Team from './pages/Team/Team.jsx';
import Department from './pages/Departments/Department.jsx';
import Services from './pages/Services/Services.jsx';
import Update from './pages/News & update/Update.jsx';
import Events from './pages/Events/Events.jsx';
import Gallery from './pages/Gallery/Gallery.jsx';
import Reviews from './pages/Reviews/Reviews.jsx';
import FAQs from './pages/FAQs/FAQs.jsx';
import Laws from './pages/Laws/Laws.jsx';
import Elements from './pages/Elements/Elements.jsx';
import WebContent from './pages/WebContent/WebContent.jsx';
import AppContent from './pages/AppContent/AppContent.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Navbar /><App/></>
  },

  {
    path: "/booking",
    element: <><Navbar /><Booking /></>
  },
  {
    path: "/team",
    element: <><Navbar /><Team /></>
  },
  {
    path: "/department",
    element: <><Navbar /><Department /></>
  },
  {
    path: "/service",
    element: <><Navbar /><Services /></>
  },
  {
    path: "/news",
    element: <><Navbar /><Update /></>
  },

  {
    path: "/event",
    element: <><Navbar />< Events /></>
  },

  {
    path: "/gallery",
    element: <><Navbar />< Gallery /></>
  },

  {
    path: "/review",
    element: <><Navbar />< Reviews /></>
  },
  {
    path: "/faqs",
    element: <><Navbar /><LeftNavbar />< FAQs /></>
  },

  {
    path: "/law",
    element: <><Navbar /><LeftNavbar />< Laws /></>
  },
  {
    path: "/element",
    element: <><Navbar />< Elements /></>
  },
  {
    path: "/webcontent",
    element: <><Navbar />< WebContent /></>
  },

  {
    path: "/appcontent",
    element: <><Navbar />< AppContent /></>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router} />
  </StrictMode>,
)
