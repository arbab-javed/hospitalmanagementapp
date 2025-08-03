import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'; // ✅ Correct imports
import Home from './pages/Home.jsx';
import Appointment from './pages/Appointment.jsx';
import Aboutus from './pages/Aboutus.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar.jsx';
import { useContext } from 'react';
import { Context } from './main.jsx';
import Footer from './components/Footer.jsx';



function App() {
  const {isAuthenticated, setIsAuthenticated, setUser}=useContext(Context);
  useEffect(()=>{
    const userFetch=async()=>{
      try {
        const response =axios.get("http://localhost:3000/api/v1/user/patient/me",{withCredentials:true});
        setIsAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      }
    }
    userFetch();
  },[isAuthenticated])
  return (
    <>
    <Navbar/>
  
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
