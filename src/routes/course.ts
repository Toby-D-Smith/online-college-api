import express, { Router } from 'express';
import { getCourseById, getCourses } from '../controllers/courseController';
import { authenticateToken } from '../common/authentication';

export const courses: Router = express.Router();

courses.route('/courses/:id').get(authenticateToken, getCourseById);
courses.route('/courses').get(authenticateToken, getCourses);
