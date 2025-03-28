import express from 'express'
import authRoutes from './routes/auth';
import cors from 'cors';

const app=express();

const PORT=5001
// const corsOptions = {
//     origin: 'http://localhost:3000',  // Replace with your frontend URL (if any)
//     methods: ['GET', 'POST'],
//     allowedHeaders: ['Content-Type'],
//   };

app.use(express.json())
app.use(cors())
app.get("/register", (req, res)=>{
    console.log('Received registration data:', req.body);  // Log the request body for debugging
  res.send('Registration route hit');
})

// app.use("/api", authRoutes)
app.listen(()=> {
    console.log(`server running ${PORT}`);
});