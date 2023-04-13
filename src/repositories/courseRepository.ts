import { PrismaClient } from '@prisma/client';
import { CourseRepository } from '../interfaces/repositories/courseRepository';
import { Course } from '../interfaces/models/course';

const prisma = new PrismaClient();

export const courseRepository: CourseRepository = {
  find: async (id: string) => {
    try {
      console.log('Getting Courses');
      const course = await prisma.course.findFirstOrThrow({ where: { id: id } });
      console.log(course);
      return course as Course;
    } catch (e) {
      throw e;
    }
  },
  findMany: async () => {
    try {
      console.log('Getting Course');
      const courses = await prisma.course.findMany();
      console.log(courses);
      return courses as Course[];
    } catch (e) {
      throw e;
    }
  },
};
