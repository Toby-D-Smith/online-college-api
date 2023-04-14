import { Prisma } from '@prisma/client';

export type Course = {
  id: string;
  name: string;
  description: string;
  price?: Prisma.Decimal | null;
  duration?: string;
};

export type CreateCourseBody = {
  name: string;
  description: string;
  price?: Prisma.Decimal | null;
  duration?: string;
};

export type UpdateCourseBody = {
  id: string;
  name?: string;
  description?: string;
  price?: Prisma.Decimal | null;
  duration?: string;
};
