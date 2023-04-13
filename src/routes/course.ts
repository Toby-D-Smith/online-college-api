import express, { Router } from 'express';
import { getCourseById, getCourses } from '../controllers/courseController';

export const courses: Router = express.Router();

courses.route('/courses/:id').get(getCourseById);
courses.route('/courses').get(getCourses);
