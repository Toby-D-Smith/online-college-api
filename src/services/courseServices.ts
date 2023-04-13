import { courseRepository } from '../repositories/courseRepository';
import { CourseService } from '../interfaces/services/courseService';

export const courseService: CourseService = {
  repo: courseRepository,
  async getCourseById(id) {
    try {
      return await this.repo.find(id);
    } catch (e) {
      throw e;
    }
  },
  async getCourses() {
    try {
      return await this.repo.findMany();
    } catch (e) {
      throw e;
    }
  },
};
