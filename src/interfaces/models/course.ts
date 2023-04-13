import { Prisma } from '@prisma/client';

export type Course = {
  id: string;
  name: string;
  description: string;
  price?: Prisma.Decimal | null;
};
