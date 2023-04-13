import { Course } from '../models/course';

export interface CourseRepository {
  find(id: string): Promise<Course>;
  findMany(): Promise<Course[]>;
}
