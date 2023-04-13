import { PrismaClient } from '@prisma/client';
import { AuthenticationRepository } from '../interfaces/repositories/authenticationRepositoy';

const prisma = new PrismaClient();

export const authenticationRepository: AuthenticationRepository = {
  find: async (username) => {
    try {
      const user = await prisma.users.findFirstOrThrow({ where: { username: username } });
      return user;
    } catch (e) {
      throw e;
    } finally {
      prisma.$disconnect;
    }
  },
  create: async (username, password) => {
    try {
      const user = await prisma.users.create({
        data: {
          username: username,
          password: password,
        },
      });
      return user;
    } catch (e) {
      throw e;
    } finally {
      prisma.$disconnect;
    }
  },
};
