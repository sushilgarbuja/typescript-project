import express from 'express';
import globalErrorHandler from './middlewares/globalErrorHandler';
import noteRoute from './notes/noteRoute';
const app = express();
app.use("api/notes",noteRoute)
app.use(globalErrorHandler)
export default app;