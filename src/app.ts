import express from 'express';
import globalErrorHandler from './middlewares/globalErrorHandler';
import noteRoute from './notes/noteRoute';
import cors from 'cors'
import envConfig from './config/config';


const app = express();
//PARSE INCOMING JSON TO HANDLE UNDEFINED ERROR
app.use(express.json())

//CORS configuration
app.use(cors({
    origin:envConfig.frontendUrl
}))

app.use("/api/notes",noteRoute)//route

//IMAGE PUBLIC
app.use(express.static('./src/uploads'))

//ERROR HANDLER
app.use(globalErrorHandler)

export default app;//export