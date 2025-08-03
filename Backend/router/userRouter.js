import express from 'express'
import { login, addNewAdmin, logoutAdmin, logoutPatient, getUserDetails, patientRegister, getAllDoctors, addNewDoctors } from '../controller/userController.js'
import { isAdminAuthenticated, isPatientAuthenticated } from '../middleware/auth.js'

const router = express.Router();

router.post("/patient/register", patientRegister);
router.post("/login", login);
router.post("/admin/register", isAdminAuthenticated, addNewAdmin);
router.get("/get/doctors", getAllDoctors);
router.get("/admin/me", isAdminAuthenticated, getUserDetails);
router.get("/patient/me", isPatientAuthenticated, getUserDetails);
router.get("/admin/logout", isAdminAuthenticated, logoutAdmin);
router.get("/patient/logout", isPatientAuthenticated, logoutPatient);
router.post("/adddoctor", isAdminAuthenticated, addNewDoctors)


export default router;