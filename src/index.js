// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";



// as early as possible in your application, import and configure dotenv
// because these are environemnt variables
// so that jitni jldi application load ho utni jldi saare env var available ho jaane cheheye hr jagah

dotenv.config({
    path: './.env'
})




connectDB()
// as db connection is done using asyncronous method
// ascn method jb bhe complete hora h
// it return the promise
.then(() => {
    // ab server start krenge
    // but abhi application ne us db ka use krke listen krna start nhi kiya tha
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
// agr db connection fail hua h toh below
.catch((err) => {
    console.log("MONGODB CONNECTION FAILED !!! ", err);
    
})

// neeche jo app.on h vo bhe kr skte h




/*
import express from "express"
const app = express()

( async () => {
    try {
    // asunc await as db is in another continenet
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        // app has listeners to listen the event
        // kya pta db toh connect ho gay h but express app is unable  
        app.on("error", (error) => {
            console.log("ERROR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
            
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw error
    }
})
*/


// middleware most of the time app.use krke use krte h
// app.use for middleware and config setting
// cors is Cross-Origin Resource Sharing (CORS)
