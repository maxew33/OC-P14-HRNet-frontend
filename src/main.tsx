import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/style.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import routesConfig from './routes/routesConfig'

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Root element with ID 'root' not found");
}

const router = createBrowserRouter(routesConfig)

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
