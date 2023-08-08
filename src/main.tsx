import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/style.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routesConfig from './routes/routesConfig'

import { atom } from 'jotai'
import { dataFormat } from './types/datatTypes'

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Root element with ID 'root' not found");
}

const router = createBrowserRouter(routesConfig)

// export const employeesAtom = atom<dataFormat[]>(
// []
// )

export const employeesAtom = atom<dataFormat[]>(
  [{
    firstName: 'firstName',
    lastName: 'lastName',
    startDate: 1641369600,
    department: 'department',
    birthday: 283684448,
    street: 'street',
    city: 'city',
    state: 'state',
    zipCode: 33000,
  }]
  )

console.log(employeesAtom)

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
