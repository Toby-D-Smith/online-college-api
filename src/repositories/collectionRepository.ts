import { PrismaClient } from '@prisma/client';
import { CollectionRepository } from '../interfaces/repositories/collectionRepository';

const prisma = new PrismaClient();

export const collectionRepository: CollectionRepository = {
  find: async (id: string) => {
    try {
      const collection = await prisma.collection.findFirstOrThrow({ where: { id: id } });
      return collection;
    } catch (e) {
      throw e;
    } finally {
      prisma.$disconnect;
    }
  },
  findMany: async () => {
    try {
      const collection = await prisma.collection.findMany();
      return collection;
    } catch (e) {
      throw e;
    } finally {
      prisma.$disconnect;
    }
  },
};
