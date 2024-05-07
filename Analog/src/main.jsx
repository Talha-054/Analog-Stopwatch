import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Analog from './Components/Analog/Analog.jsx'
import Layout from './Components/Clock-layout/Layout.jsx'
import Template from './Components/Template/Template.jsx'
import Digital from './Components/Digital/Digital.jsx'






const router = createBrowserRouter([
    {
      path: "/",
      element: <Template />,
      children:[
        {
          path: "analog",
          element: <Analog />
        },
        {
          path: "custom",
          element: <Layout />
        },
        {
          path: "digital",
          element: <Digital />
        }
      ]
      
    }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
