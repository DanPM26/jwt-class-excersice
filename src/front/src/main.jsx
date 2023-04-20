import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import FormUser from './components/FormUser'
import LoginForm from './components/LoginForm'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Profile from './components/Profile'
import UserProvider from './context/UserContext'
import LoginProvider from './context/LoginContext'

const router = createBrowserRouter([

  {
    path: "/",
    element: <App /> ,
  },
  {
    path: "/sign-up",
    element: <UserProvider><FormUser /></UserProvider>,
  },
  {
    path: "/login",
    element:<UserProvider><LoginForm /></UserProvider>,
  },
  {
    path: "/profile",
    element:<UserProvider><Profile /></UserProvider>,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
