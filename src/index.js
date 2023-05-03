import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './pages/Home/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/Home/about'
import Header from './components/Header/header'
import Error404 from './components/Error/error404'

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
  </React.StrictMode>,
  document.getElementById('root')
)
