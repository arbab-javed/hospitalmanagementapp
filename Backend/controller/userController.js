import { catchAsyncErrors } from "../middleware/catchAsyncErrors.js";
import cloudinary from 'cloudinary';
import User from '../model/userSchema.js';
import { generateToken } from '../utils/jwtToken.js';
import ErrorHandler from '../middleware/errorMiddleware.js';
import jwt from 'jsonwebtoken';

import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file



export const patientRegister = catchAsyncErrors(async(req, res, next) => {
    const { firstName, lastName, email, phonenumber, nic, dob, gender, password } = req.body;

    if (!firstName || !lastName || !email || !phonenumber || !nic || !dob || !gender || !password) {
        return next(new ErrorHandler('Please fill all fields', 400));
    }

    const userExists = await User.findOne({ email });
    if (userExists) return next(new ErrorHandler('User already exists', 400));

    const user = await User.create({
        firstName,
        lastName,
        email,
        phonenumber,
        nic,
        dob,
        gender,
        password,
        role: 'patient'
    });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, { // Changed to JWT_SECRET_KEY
        expiresIn: process.env.JWT_EXPIRES
    });

    res.status(201).json({
        success: true,
        token,
        user
    });
});
export const getUserProfile = catchAsyncErrors(async(req, res, next) => {
    const user = await User.findById(req.user.id);
    res.status(200).json({ success: true, user });
});

export const getUser = catchAsyncErrors(async(req, res, next) => {
    const user = await User.findById(req.user.id);
    if (!user) return next(new ErrorHandler('User not found', 404));

    res.status(200).json({
        success: true,
        user
    });
});

export const login = catchAsyncErrors(async(req, res, next) => {
    const { email, password, confirmPassword, role } = req.body;

    // 1. Field validation
    if (!email || !password || !confirmPassword || !role) {
        return next(new ErrorHandler("Please fill all the fields", 400));
    }

    // 2. Password confirmation check
    if (password !== confirmPassword) {
        return next(new ErrorHandler("Confirm password doesn't match", 400));
    }

    // 3. User existence check
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
        return next(new ErrorHandler("Email or Password is incorrect", 400));
    }

    // 4. Password matching
    const isPasswordMatched = await user.comparePassword(password);
    if (!isPasswordMatched) {
        return next(new ErrorHandler("Email or Password is incorrect", 400));
    }

    // 5. Role verification
    if (role !== user.role) {
        return next(new ErrorHandler("User with this role not found!", 400));
    }

    // 6. Success response with token
    generateToken(user, "User login successfully!", 200, res);
});

export const addNewAdmin = catchAsyncErrors(async(req, res, next) => {
    const { firstName, lastName, email, phonenumber, nic, dob, gender, password } = req.body;
    if (!firstName || !lastName || !email || !phonenumber || !nic || !dob || !gender || !password) {
        return next(new ErrorHandler("Please fill all the fields", 400));
    }

    const isRegistered = await User.findOne({ email });
    if (isRegistered) {
        return next(new ErrorHandler("Admin with this email already exists", 400));
    }

    await User.create({
        firstName,
        lastName,
        email,
        phonenumber,
        nic,
        dob,
        gender,
        password,
        role: "Admin"
    });

    res.status(200).json({
        success: true,
        message: "New Admin Registered!"
    });
});

export const getAllDoctors = catchAsyncErrors(async(req, res, next) => {
    const doctors = await User.find({ role: "Doctor" });
    res.status(200).json({
        success: true,
        doctors
    });
});

export const getUserDetails = catchAsyncErrors(async(req, res, next) => {
    const user = req.user;
    res.status(200).json({
        success: true,
        user
    });
});

export const logoutAdmin = catchAsyncErrors(async(req, res, next) => {
    res.status(200).cookie("admintoken", "", {
        httpOnly: true,
        expires: new Date(Date.now()),
    }).json({
        success: true,
        message: "Admin logged out successfully!"
    });
});

export const logoutPatient = catchAsyncErrors(async(req, res, next) => {
    res.status(200).cookie("patientToken", "", {
        httpOnly: true,
        expires: new Date(Date.now()),
    }).json({
        success: true,
        message: "Patient logged out successfully!"
    });
});

export const addNewDoctors = catchAsyncErrors(async(req, res, next) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return next(new ErrorHandler("Doctor Avatar Required", 400));
    }

    const { docAvator } = req.files;
    const allowedFormats = ["image/png", "image/jpeg", "image/webp"];
    if (!allowedFormats.includes(docAvator.mimetype)) {
        return next(new ErrorHandler("File format not supported!", 400));
    }

    const {
        firstName,
        lastName,
        email,
        phonenumber,
        nic,
        dob,
        gender,
        password,
        doctorDepartment
    } = req.body;

    if (!firstName || !lastName || !email || !phonenumber || !nic ||
        !dob || !gender || !password || !doctorDepartment
    ) {
        return next(new ErrorHandler("Please provide full details", 400));
    }

    const isRegistered = await User.findOne({ email });
    if (isRegistered) {
        return next(new ErrorHandler(`${isRegistered.role} already registered!`, 400));
    }

    const cloudinaryResponse = await cloudinary.uploader.upload(docAvator.tempFilePath);
    if (!cloudinaryResponse || cloudinaryResponse.error) {
        console.error("Cloudinary Error:", cloudinaryResponse.error || "Unknown Cloudinary Error");
        return next(new ErrorHandler("Image upload failed", 500));
    }

    const doctor = await User.create({
        firstName,
        lastName,
        email,
        phonenumber,
        nic,
        dob,
        gender,
        password,
        doctorDepartment,
        role: "Doctor",
        docAvator: {
            public_id: cloudinaryResponse.public_id,
            url: cloudinaryResponse.secure_url
        }
    });

    res.status(200).json({
        success: true,
        message: "New Doctor Registered!",
        doctor
    });
});