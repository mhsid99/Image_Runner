
import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js'

dotenv.config(); //creates env variables

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use('/api/v1/post',postRoutes); //for retrieveing posts
app.use('/api/v1/dalle',dalleRoutes);//generate data from api

app.get('/', async (req, res) => {
    res.send('hello!');
  });

  //if the connection to database is successful, go head and start the server else report the error
const startServer=async()=>{
    try{
        connectDB(process.env.MONGODB_URL);
        app.listen(8080,()=>console.log('server started on http://localhost:8080'));
    }catch(error){
        console.log(error);
    }
}

startServer();