import { env } from 'process';
import app from '../backend/src/app';
import envConfig from './src/config/config';

const startServer=()=>{
    const port=envConfig.port || 3000;
    app.listen(port,() => {
        console.log(`Server is running on port ${port}`);
    });
}
startServer();