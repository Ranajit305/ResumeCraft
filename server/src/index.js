import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import cookieParser from 'cookie-parser'

import connectDB from './db/connectDB.js';
import userRouter from './routes/user.route.js';
import resumeRouter from './routes/resume.route.js';

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));

app.get('/', (req, res) => {
    res.send('Server is Live');
});

app.use('/api/user', userRouter);
app.use('/api/resume', resumeRouter);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on PORT: ${PORT}`);
});