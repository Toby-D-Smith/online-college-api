import { PrismaClient } from '@prisma/client';
import { CourseRepository } from '../interfaces/repositories/courseRepository';
import { Course, CreateCourseBody, UpdateCourseBody } from '../interfaces/models/course';

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
  create: async ({ name, description, duration, price }) => {
    try {
      const data: CreateCourseBody = { name, description };
      if (duration) data.duration = duration;
      if (price) data.price = price;

      const course = await prisma.course.create({
        data,
      });

      return course as Course;
    } catch (e) {
      throw e;
    } finally {
      prisma.$disconnect;
    }
  },
  update: async ({ id, name, description, duration, price }) => {
    try {
      const data: UpdateCourseBody = { id };
      if (name) data.name = name;
      if (description) data.description = description;
      if (duration) data.duration = duration;
      if (price) data.price = price;

      const course = await prisma.course.update({
        where: { id },
        data,
      });

      return course as Course;
    } catch (e) {
      throw e;
    } finally {
      prisma.$disconnect;
    }
  },
  delete: async (id) => {
    try {
      const course = await prisma.course.delete({
        where: { id },
      });

      return;
    } catch (e) {
      throw e;
    } finally {
      prisma.$disconnect;
    }
  },
};
