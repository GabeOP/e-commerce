import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import global from '../global.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FormLogin from './pages/FormLogin';
import Produtos from '../src/pages/Produtos'

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>
  },
  {
    path: "/produtos",
    element: <Produtos/>
  },
  {
    path: "/login",
    element:<FormLogin/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
