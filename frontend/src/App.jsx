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
import ServiceDetails from './components/ServiceDetails'
import AddService from './components/AddService'
import AdminDashboard from './components/Admin'
import UserManagement from './components/UserManagement'
import ServiceManage from './components/ServiceManage'
import BookingManage from './components/BookingManage'
import ConnectWithUs from './components/Connect'
import EditService from './components/Edit'
import Admin from './components/Admin'
import Booking from './components/Booking'

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
      <Route path="/service-details/:id" element={<ServiceDetails />} />
     <Route path="/AddService" element={<AddService />} />
     <Route path="/admin Dashboard" element={<AdminDashboard />} />
     <Route path="/user Management" element={<UserManagement/>} />
     <Route path="/service Manage" element={<ServiceManage />} />
     <Route path="/BookingManage" element={<BookingManage />} />
     <Route path="/Connectus" element={<ConnectWithUs />} />
     <Route path="/admin" element={<Admin />} />
     <Route path="/Edit" element={<EditService />} />
     <Route path="/Booking" element={<Booking />} />
</Routes>
    </>
  )
}

export default App
