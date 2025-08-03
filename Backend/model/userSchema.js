// models/userModel.js
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs'; // Add this import

// Define the user schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phonenumber: {
        type: String,
        required: true
    },
    nic: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'Patient',
    }
});

// Add password hashing before saving
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});

// Add method to compare passwords
userSchema.methods.comparePassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

// Method to generate JWT (keep your existing)
userSchema.methods.generateJsonWebToken = function() {
    return jwt.sign({ id: this._id, role: this.role },
        process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE }
    );
};

// Create User model and export it
const User = mongoose.model('User', userSchema);
export default User;