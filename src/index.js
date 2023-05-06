import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import './styles/index.css'

// Pages
import RootLayout from './layout/RootLayout'
import Home from './pages/Home'
import About from './pages/About'
import Leasing from './pages/Leasing'
import Error404 from './components/Error/Error404'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/leasing" element={<Leasing />} />
      <Route path="*" element={<Error404 />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
