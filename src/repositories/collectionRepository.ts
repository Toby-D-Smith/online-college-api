import { PrismaClient } from '@prisma/client';
import { CollectionRepository } from '../interfaces/repositories/collectionRepository';

const prisma = new PrismaClient();

export const collectionRepository: CollectionRepository = {
  find: async (id: string) => {
    console.log('Getting Collection');
    const collection = await prisma.collection.findFirstOrThrow({ where: { id: id } });
    console.log(collection);
    return collection;
  },
  findMany: async () => {
    console.log('Getting Collection');
    const collection = await prisma.collection.findMany();
    console.log(collection);
    return collection;
  },
};
