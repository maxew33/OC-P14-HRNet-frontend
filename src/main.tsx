import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import CreateEmployee from './pages/CreateEmployee'
import ViewEmployees from './pages/ViewEmployees'

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateEmployee/>
  },
  {
    path: "/view",
    element: <ViewEmployees/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
