import { Course } from '../models/course';
import { CourseRepository } from '../repositories/courseRepository';

export interface CourseService {
  repo: CourseRepository;
  getCourseById(id: string): Promise<Course>;
  getCourses(): Promise<Course[]>;
}
