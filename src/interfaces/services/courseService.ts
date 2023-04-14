import { Course, CreateCourseBody, UpdateCourseBody } from '../models/course';
import { CourseRepository } from '../repositories/courseRepository';

export interface CourseService {
  repo: CourseRepository;
  getCourseById(id: string): Promise<Course>;
  getCourses(): Promise<Course[]>;
  createCourse(createCourseBody: CreateCourseBody): Promise<Course>;
  updateCourse(createCourseBody: UpdateCourseBody): Promise<Course>;
  deleteCourse(id: string): Promise<void>;
}
