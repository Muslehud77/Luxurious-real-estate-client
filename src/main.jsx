import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './Root/Root';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
      path: '/',
      element: <Home/>
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/register',
      element: <Register/>
    },
    {
      path: '/dashboard',
      element: <Dashboard/>
    }
    
  ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
