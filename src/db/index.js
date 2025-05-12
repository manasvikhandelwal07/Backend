import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        // mongoose return the object
        // give response after connection
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
        //  this is mongodb url where connection is happening
    } catch (error) {
        console.log("MONGODB CONNECTION ERROR ", error);
        // throw se bhe exit ho jaayega
        // nodejs gives us process
        // currect application koi toh bhe process pr chl rahi hogi
        // nd ye uska reference h

        
        process.exit(1)
    }
}

export default connectDB