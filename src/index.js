import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './pages/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/Home/About'
import Header from './components/Header/Header'
import Error404 from './components/Error/Error404'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <App />
    </Router>
  </React.StrictMode>
)
