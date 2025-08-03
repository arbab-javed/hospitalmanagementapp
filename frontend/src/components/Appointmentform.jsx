import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Appointmentform() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phonenumber: "",
        dob: "",
        nic: "",
        gender: "",
        appointment_date: "",
        department: "",
        doctor_firstName: "",
        doctor_lastName: "",
        address: "",
        has_visited: false
    });

    const [doctors, setDoctors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const departmentArray = [
        "Pediatrics",
        "Orthopedics",
        "Cardiology",
        "Neurology",
        "Oncology",
        "Radiology",
        "Physical Therapy",
        "Dermatology",
        "EMI"
    ];

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const { data } = await axios.get("http://localhost:3000/api/v1/user/get/doctors", {
                    withCredentials: true
                });
                setDoctors(data.doctors || []);
            } catch (error) {
                console.error("Error fetching doctors:", error);
            }
        };
        fetchDoctors();
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const handleAppointment = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        
        try {
            // Get the selected doctor's details
            const selectedDoctor = doctors.find(doc => doc._id === formData.doctorId);
            
            // Prepare the data to send
            const appointmentData = {
                ...formData,
                doctor_firstName: selectedDoctor?.firstName || "",
                doctor_lastName: selectedDoctor?.lastName || "",
                appointment_date: formData.appointmentDate,
                has_visited: formData.hasVisited
            };

            const response = await axios.post(
                "http://localhost:3000/api/v1/appointment/post",
                appointmentData,
                {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );

            if (response.data.success) {
                setSuccess(true);
                // Reset form after successful submission
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phonenumber: "",
                    dob: "",
                    nic: "",
                    gender: "",
                    appointmentDate: "",
                    department: "",
                    doctorId: "",
                    address: "",
                    hasVisited: false
                });
            }
        } catch (error) {
            console.error("Error submitting appointment:", error);
            setError(error.response?.data?.message || "Failed to book appointment. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const filteredDoctors = doctors.filter(
        doc => doc.department === formData.department
    );

    return (
        <div className="container form-component appointment-form">
            <h2 style={{ fontWeight: 'bold', height: '50px' }}>Appointment</h2>

            {success && (
                <div className="alert alert-success" role="alert">
                    Appointment booked successfully!
                </div>
            )}

            {error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}

            <form onSubmit={handleAppointment}>
                <div>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="number"
                        name="phonenumber"
                        placeholder="Phone Number"
                        value={formData.phonenumber}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <input
                        type="date"
                        name="dob"
                        placeholder="DOB"
                        value={formData.dob}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <input
                        type="number"
                        name="nic"
                        placeholder="NIC"
                        value={formData.nic}
                        onChange={handleChange}
                        required
                    />
                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>

                <div>
                    <input
                        type="date"
                        name="appointmentDate"
                        placeholder="Appointment Date"
                        value={formData.appointmentDate}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <select
                        name="department"
                        value={formData.department}
                        onChange={(e) =>
                            setFormData(prev => ({
                                ...prev,
                                department: e.target.value,
                                doctorId: ""
                            }))
                        }
                        required
                    >
                        <option value="">Select Department</option>
                        {departmentArray.map((dept, index) => (
                            <option key={index} value={dept}>
                                {dept}
                            </option>
                        ))}
                    </select>
                </div>

                {formData.department && (
                    <div>
                        <select
                            name="doctorId"
                            value={formData.doctorId}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Doctor</option>
                            {filteredDoctors.map((doc) => (
                                <option
                                    key={doc._id}
                                    value={doc._id}
                                >
                                    {doc.firstName} {doc.lastName}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                <div>
                    <textarea
                        name="address"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleChange}
                        rows={4}
                        style={{ width: '100%' }}
                        required
                    />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                    <label htmlFor="hasVisited" style={{ marginRight: '10px' }}>
                        Have you visited before?
                    </label>
                    <input
                        type="checkbox"
                        id="hasVisited"
                        name="hasVisited"
                        checked={formData.hasVisited}
                        onChange={handleChange}
                    />
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <button type="submit" disabled={isLoading}>
                        {isLoading ? 'Booking...' : 'Get Appointment'}
                    </button>
                </div>
            </form>
        </div>
    );
}