import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()




app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))



// accepting json for my data
// multer for accepting files

app.use(express.json({limit: "16kb"}))




// agr url se data aaya
// extended means object k ander object bhe le he skte h

app.use(express.urlencoded({extended: true, limit: "16kb"}))



// many times we want to store file folder images that come in data

app.use(express.static("public"))

// CORS_ORIGIN=*
// MEANS kahi se bhe request aaye toh chlega
// aisa nhi h is he project k frontend se
// so bad practice


// cookie parser for mere server se user k browser ki cookie access kr pau 
// and set bhe kr pau cookie
// basically cookies pr curd operation perform kr pau
// there r ways to keep secure cookies in the browser of the user
// secure cookies can be only read and remove by server


app.use(cookieParser())


export { app }


// middleware
// ek mere pass url aaya
// request aayi and mne usko handel krke bhej diya
// but m process krvana chatu hu
// kuki url pr toh bahut saari request aayegi
// kya aap us response ko lene k liye capable ho bhe ya nhi
// kya pta login he na kr rkha h 
// toh khuch na khuch beech m check krna pdhta hoga
// beech ki checking ko he middwear bolte h



// next ka mt;b talking about middlewear
// just a flag
// agr ek middlew ka kaam ho jaayega toh vo next flag pass krega to the next middlew
// ki i m done


// baar baar database se toh baat krni he h
// user controller k liye
// video con k liye , etc
// toh baar baar ye try catch sb ku likhna h
// so do it in utility file
