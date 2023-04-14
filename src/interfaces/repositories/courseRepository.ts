import { Course, CreateCourseBody, UpdateCourseBody } from '../models/course';

export interface CourseRepository {
  find(id: string): Promise<Course>;
  findMany(): Promise<Course[]>;
  create(createCourseBody: CreateCourseBody): Promise<Course>;
  update(createCourseBody: UpdateCourseBody): Promise<Course>;
  delete(id: string): Promise<void>;
}
