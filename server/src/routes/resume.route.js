import express from 'express'
import verifyToken from '../middlewares/verifyToken.js';
import { createResume, deleteResume, getAllResume, getResumeById, updateResume } from '../controllers/resume.controller.js';

const resumeRouter = express.Router();

resumeRouter.get('/', verifyToken, getAllResume);
resumeRouter.get('/:resumeId', verifyToken, getResumeById);
resumeRouter.post('/', verifyToken, createResume);
resumeRouter.put('/:resumeId', verifyToken, updateResume);
resumeRouter.delete('/:resumeId', verifyToken, deleteResume);

export default resumeRouter