import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import AboutUs from './components/Aboutus'
import Services from './components/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Nav/>
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/login" element={<Login />} />
     <Route path="/About" element={<AboutUs />} />
     <Route path="/services" element={<Services />} />
     <Route path="/service/:id" element={<ServiceDetails />} /> 
     
</Routes>
    </>
  )
}

export default App
