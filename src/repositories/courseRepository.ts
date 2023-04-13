import { PrismaClient } from '@prisma/client';
import { CourseRepository } from '../interfaces/repositories/courseRepository';
import { Course } from '../interfaces/models/course';

const prisma = new PrismaClient();

export const courseRepository: CourseRepository = {
  find: async (id: string) => {
    try {
      const course = await prisma.course.findFirstOrThrow({ where: { id: id } });
      return course as Course;
    } catch (e) {
      throw e;
    } finally {
      prisma.$disconnect;
    }
  },
  findMany: async () => {
    try {
      const courses = await prisma.course.findMany();
      return courses as Course[];
    } catch (e) {
      throw e;
    } finally {
      prisma.$disconnect;
    }
  },
};
