import React, { useState, useContext } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Context } from '../main';
import { toast } from 'react-toastify';
import axios from 'axios';

export default function Login() {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("Patient"); // Default role as per your backend needs

  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Frontend validation
    if (password !== confirmPassword) {
      toast.error("Password and Confirm Password don't match");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/login",
        { email, password, confirmPassword, role },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      toast.success(response.data.message);
      setIsAuthenticated(true);
      navigateTo("/");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Login failed. Please try again."
      );
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className='container form-component login-form'>
      <h2>Sign In</h2>
      <p>Please Login To Continue</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti ad exercitationem alias dolorum? Qui, quod.</p>

      <form onSubmit={handleLogin}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input
            type="text"
            value={email}
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            value={password}
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            value={confirmPassword}
            placeholder='Confirm Password'
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {/* Role selection - hidden if only Patient can login */}
          <select 
            value={role} 
            onChange={(e) => setRole(e.target.value)}
            style={{ display: role === "Patient" ? "none" : "block" }} // Hide if only Patient
          >
            <option value="Patient">Patient</option>
            <option value="Doctor">Doctor</option>
            <option value="Admin">Admin</option>
          </select>
        </div>

        <div style={{
          display: 'flex',
          gap: "10px",
          justifyContent: "flex-end",
          flexDirection: "row",
          marginTop: '10px'
        }}>
          <p style={{ marginBottom: 0 }}>Not Registered?</p>
          <Link
            to="/register"
            style={{ textDecoration: "none", alignItems: "center" }}
          >
            Register Now
          </Link>
        </div>

        <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", marginTop: '20px' }}>
          <button type='submit'>Login</button>
        </div>
      </form>
    </div>
  );
}