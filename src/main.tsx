import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/style.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import CreateEmployee from './pages/CreateEmployee/CreateEmployee'
import ViewEmployees from './pages/ViewEmployees/ViewEmployees'

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
