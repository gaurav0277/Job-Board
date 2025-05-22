import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/navbar.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div> <h1>home page</h1> </div>,
    
  },
  {
    path: "/login",
    element: <div> <h1>lonin page</h1> </div>,
    
  },
  {
    path: "/about",
    element: <div> <h1>aboutpage</h1> </div>,
    
  },
  {
    path: "/contact",
    element: <div> <h1>contact page</h1> </div>,
    
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
      <Navbar/>
    </RouterProvider>
    
  </StrictMode>,
)
