import express from 'express'
import { postAppointment, getAllAppointment, updateAppointmentStatus, deleteAppointment } from '../controller/appointmentController.js'
import { isPatientAuthenticated, isAdminAuthenticated } from '../middleware/auth.js'

const router = express.Router();

router.post("/post", isPatientAuthenticated, postAppointment);
router.get("/viewappoint", isAdminAuthenticated, getAllAppointment);
router.put("/updateappoint/:id", isAdminAuthenticated, updateAppointmentStatus);
router.put("/deleteappoint/:id", isAdminAuthenticated, deleteAppointment)

export default router;