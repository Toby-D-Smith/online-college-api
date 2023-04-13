import { PrismaClient } from '@prisma/client';
import { CourseRepository } from '../interfaces/repositories/courseRepository';

const prisma = new PrismaClient();

export const courseRepository: CourseRepository = {
  find: async (id: string) => {
    console.log('Getting Collection');
    const course = await prisma.course.findFirstOrThrow({ where: { id: id } });
    console.log(course);
    return course;
  },
  findMany: async () => {
    console.log('Getting Collection');
    const course = await prisma.course.findMany();
    console.log(course);
    return course;
  },
};
