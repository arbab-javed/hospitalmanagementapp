import { catchAsyncErrors } from '../middleware/catchAsyncErrors.js'
import ErrorHandler from '../middleware/errorMiddleware.js'
import { Appointment } from '../model/appointmentScheme.js'
import User from '../model/userSchema.js'

export const postAppointment = catchAsyncErrors(async(req, res, next) => {
    const {
        firstName,
        lastName,
        email,
        phonenumber,
        nic,
        dob,
        gender,
        appointment_date,
        department,
        doctor_firstName,
        doctor_lastName,
        has_visited,
        address,

    } = req.body;
    if (!firstName || !lastName || !email || !phonenumber || !nic || !dob || !gender || !appointment_date || !department || !doctor_firstName || !doctor_lastName || !has_visited || !address) {
        return next(new ErrorHandler("Please fill full form ", 400));
    }
    const isConflict = await User.find({
        firstName: doctor_firstName,
        lastName: doctor_lastName,
        role: "Doctor",
        doctorDepartment: department


    })
    if (isConflict.length === 0) {
        return next(new ErrorHandler("Doctor not found ", 404))
    }
    if (isConflict.length > 1) {
        return next(new ErrorHandler("Doctor conflict , please contact through email or phone ! ", 404))
    }

    const doctorId = isConflict[0]._id;
    const patientId = req.user._id;

    const appointment = await Appointment.create({
        firstName,
        lastName,
        email,
        phonenumber,
        nic,
        dob,
        gender,
        appointment_date,
        department,
        doctor: {
            firstName: doctor_firstName,
            lastName: doctor_lastName
        },
        has_visited,
        address,
        doctor_id,
        patient_id
    })
    res.status(200).json({
        success: true,
        message: "Appointment sent successfully ! "

    })
})

export const getAllAppointment = catchAsyncErrors(async(req, res, next) => {
    const getappoint = await Appointment.find();
    if (getappoint) {
        res.status(200).json({
            success: true,
            getappoint

        })

    }
})

export const updateAppointmentStatus = catchAsyncErrors(async(req, res, next) => {
    const { id } = req.params;
    let appointment = await Appointment.findById(id);
    if (!appointment) {
        return next(new ErrorHandler("Appointment not found ", 404))

    }
    appointment = await Appointment.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
        UseFindAndModify: false


    });
    res.status(200).json({
        success: true,
        message: "Appointment status updated!",
        appointment
    })
})

//Delete the appointment...
export const deleteAppointment = catchAsyncErrors(async(req, res, next) => {
    const { id } = req.params;
    let appointment = await Appointment.findById(id);
    if (!appointment) {
        return next(new ErrorHandler("Appointment not found !", 404));

    }
    await appointment.deleteOne();
    res.status(200).json({
        success: true,
        message: "Appointment deleted successfully ...",
        appointment,

    });

})