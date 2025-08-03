import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'; // Added useEffect
import { useContext } from 'react';
import { Context } from '../main';
import { toast } from 'react-toastify';
import axios from 'axios';
import {GiHamburgerMenu} from 'react-icons/gi'


export default function Navbar() {
    const [show, setShow] = useState(false);
    const { isAuthenticated, setisAuthenticated } = useContext(Context);
    const navigateTo = useNavigate();

    const handleLogout = async () => {
        try {
            const res = await axios.get("http://localhost:3000/api/v1/user/patient/logout", { withCredentials: true });
            toast.success(res.data.message);
            setisAuthenticated(false);
            navigateTo("/");
        } catch (err) {
            toast.error(err.response?.data?.message || "Logout Failed");
        }
    }

    const goToLogin = () => {
        navigateTo("/login")
    }

    // Example of using toast.success on successful registration.
    useEffect(() => {
        //  a more appropriate place for this would be in your registration component
        //  where you handle the actual registration, but for demonstration, I'll put it here
        const registrationSuccessful = localStorage.getItem('registrationSuccessful');
        if (registrationSuccessful) {
            toast.success("Registration successful!");
            localStorage.removeItem('registrationSuccessful'); // Clear the flag
        }
    }, []);

    return (
        <nav className='container'>
            <div className="logo"><img src="/logo.jpg" alt="logo" className='logo-img'
                 /></div>
            <div className={show ? "navLinks showvalue" : "navLinks"}>
                <div className="links">
                    <Link to={'/'}>HOME</Link>
                    <Link to={'/aboutus'}>ABOUT US </Link>
                    <Link to={'/appointment'}>APPOINTMENT</Link>
                    
                </div>
                {isAuthenticated ? (
                    <button className='logoutBtn btn' onClick={handleLogout}>Logout</button>
                ) : (
                    <button className='loginBtn btn' onClick={goToLogin}>Login</button>
                )}
            </div>
            <div className="hamburger" onClick={()=>setShow(!show)}>
                <GiHamburgerMenu/>
            </div>
        </nav>
    )
}
