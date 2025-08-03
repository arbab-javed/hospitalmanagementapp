import express from 'express'
import { config } from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import fileUpload from 'express-fileupload'
import cloudinary from 'cloudinary'
import { dbconnection } from './Database/dbconnection.js'
import { errorMiddleware } from './middleware/errorMiddleware.js'
import userRouter from './router/userRouter.js'
import appointmentRouter from './router/appointmentRouter.js'


//importing the MessageRouter here ....
import messageRouter from './router/messageRouter.js'

const app = express();

config({ path: "./config/config.env" })

app.use(cors({
    origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
}))

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
}))

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    secret_key: process.env.CLOUDINARY_API_SECRET
})

app.get('/', (req, res) => {
    res.send("Hello to Backend")
})



app.listen(process.env.PORT, () => {
    console.log(`Server is listening at the PORT ${process.env.PORT}`)

})
app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/appointment", appointmentRouter);




dbconnection();
app.use(errorMiddleware);
export default app;