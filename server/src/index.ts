import express from 'express'
import authRoutes from './routes/auth';
import cors from 'cors';
import dotenv from 'dotenv'
import connectDB from './config/db';

const app=express();

const PORT=5001
dotenv.config()



app.use(cors())
app.use(express.json())

connectDB();
app.use("/api", authRoutes)

app.listen(PORT,()=> {
    console.log(`server running ${PORT}`);
});