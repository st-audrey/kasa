import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './styles/index.css'

// Components
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'

// Pages
import Home from './pages/Home/Home'
import About from './pages/Home/About'
import Error404 from './components/Error/Error404'
import Footer from './components/Footer/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
