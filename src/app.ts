import express from 'express';
import globalErrorHandler from './middlewares/globalErrorHandler';
import noteRoute from './notes/noteRoute';
const app = express();
app.use(express.json())//middleware
app.use("/api/notes",noteRoute)//route
app.use(express.static('./src/uploads'))
app.use(globalErrorHandler)//middleware
export default app;//export