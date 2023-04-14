import express, { Router } from 'express';
import { getCourseById, getCourses, createCourse, updateCourse, deleteCourse } from '../controllers/courseController';
import { authenticateToken } from '../common/authentication';

export const courses: Router = express.Router();

courses.route('/courses/:id').get(authenticateToken, getCourseById);
courses.route('/courses').get(authenticateToken, getCourses);
courses.route('/courses').post(authenticateToken, createCourse);
courses.route('/courses/:id').put(authenticateToken, updateCourse);
courses.route('/courses/:id').delete(authenticateToken, deleteCourse);
