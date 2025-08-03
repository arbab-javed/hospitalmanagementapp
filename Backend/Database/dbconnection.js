import mongoose from 'mongoose'

export const dbconnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "mern_hospital_app"
    }).then(() => {
        []
        console.log("Connected to Database successfully ")
    }).catch(err => {
        []
        console.log(`E[rror in connecting to the Database ${err}`)
    })
}