import React, { useState, useContext } from 'react';
import { useNavigate, Navigate, Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Context } from '../main';

const Register = () => {
    const { isAuthenticated, setIsAuthenticated } = useContext(Context);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phonenumber: '',
        nic: '',
        dob: '',
        password: '',
        gender: ''
    });

    const navigateTo = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.post(
                'http://localhost:3000/api/v1/user/patient/register',
                formData,
                {
                    withCredentials: true,
                    headers: { 'Content-Type': 'application/json' }
                }
            );

            toast.success(data.message);
            setIsAuthenticated(true);
            navigateTo('/');
        } catch (error) {
            const errMsg = error.response?.data?.message ||
                            error.response?.data?.error?.message ||
                       'An error occurred, please try again.';
            toast.error(errMsg);
        }
    };

    if (isAuthenticated) return <Navigate to="/" />;

    return (
        <div className="container form-component register-form">
            <h2>Sign Up</h2>
            <p>Please Sign Up To Continue</p>
            <form onSubmit={handleRegister}>
                <div>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="number"
                        name="phonenumber"
                        placeholder="Phone Number"
                        value={formData.phonenumber}
                        onChange={handleChange}
                    />
                    <input
                        type="date"
                        name="dob"
                        placeholder="DOB"
                        value={formData.dob}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="number"
                        name="nic"
                        placeholder="NIC"
                        value={formData.nic}
                        onChange={handleChange}
                    />
                    <select name="gender" value={formData.gender} onChange={handleChange}>
                        <option value="">Select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', marginTop: '10px' }}>
                    <p style={{ marginBottom: 0 }}>Already Registered?</p>
                    <Link to="/login">Login Now</Link>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    );
};

export default Register;