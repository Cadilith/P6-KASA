import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/'
import Banner from './components/Banner/'
import Home from './pages/Home/'
import Apropos from './pages/Apropos/'
import Estate from './pages/Estate'
import Error from './components/Error'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<Apropos />} />
        <Route path="/estate" element={<Estate />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
