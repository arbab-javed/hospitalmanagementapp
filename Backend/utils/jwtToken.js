import jwt from "jsonwebtoken";

export const generateToken = (user, message, statusCode, res) => {
    // 1. Token Generation
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES, // Uses .env variable
    });

    // 2. Cookie Configuration
    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000 // Converts days to ms
        ),
        httpOnly: true, // Prevents XSS attacks
        secure: process.env.NODE_ENV === "production", // HTTPS-only in production
        sameSite: "strict", // CSRF protection
    };

    // 3. Response
    res.status(statusCode)
        .cookie("token", token, options)
        .json({
            success: true,
            message,
            user,
            token
        });
};