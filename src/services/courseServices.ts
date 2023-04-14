import { courseRepository } from '../repositories/courseRepository';
import { CourseService } from '../interfaces/services/courseService';
import { CreateCourseBody, UpdateCourseBody } from '../interfaces/models/course';

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
  async createCourse(createCourseBody: CreateCourseBody) {
    try {
      return await this.repo.create(createCourseBody);
    } catch (e) {
      throw e;
    }
  },
  async updateCourse(updateCourseBody: UpdateCourseBody) {
    try {
      return await this.repo.update(updateCourseBody);
    } catch (e) {
      throw e;
    }
  },
  async deleteCourse(id: string) {
    try {
      return await this.repo.delete(id);
    } catch (e) {
      throw e;
    }
  },
};
