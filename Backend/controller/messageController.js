import { Message } from "../model/messageSchemas.js";
import { catchAsyncErrors } from "../middleware/catchAsyncErrors.js";
import errorHandler from "../middleware/errorMiddleware.js";

export const sendMessage = catchAsyncErrors(async(req, res, next) => {
    const { firstName, lastName, email, phonenumber, message } = req.body;

    if (!firstName || !lastName || !email || !phonenumber || !message) {
        return next(new errorHandler("Please fill full form ", 400));
    }

    try {
        await Message.create({ firstName, lastName, email, phonenumber, message });

        res.status(200).json({
            success: true,
            message: "Message sent successfully"
        });
    } catch (error) {
        console.log("Validation Error:", error); // ✅ logs full error to the terminal

        return res.status(400).json({
            success: false,
            message: error.message // sends error message to the client
        });
    }
});

export const getAllMessages = catchAsyncErrors(async(req, res, next) => {
    const message = await Message.find();
    res.status(200).json({
        success: true,
        message
    })
})