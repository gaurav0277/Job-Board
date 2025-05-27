import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/navbar.jsx'
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import JobApplicationForm from './components/JobApplicationForm.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    
  },
  {
    path: "/job",
    element: <JobApplicationForm/>,
    
  },
  {
    path: "/about",
    element: <div> <h1>aboutpage</h1> <Link to='/contact'> contact </Link> </div>,
    
  },
  {
    path: "/contact",
    element: <div> <h1>contact page</h1>  <Link to='/'> home </Link></div>,
    
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
