import prisma from '../core/prisma-client';
import {
   PrismaProgramCreate,
   PrismaProgramWhereUniqueInput,
} from '../modules/program/program.prisma.type';

const createOne = async (data: PrismaProgramCreate) => {
   try {
      return await prisma.program.create({ data });
   } catch (err) {
      throw err;
   }
};

const findOne = async (query: PrismaProgramWhereUniqueInput) => {
   try {
      return await prisma.program.findUnique({ where: query });
   } catch (err) {
      throw err;
   }
};

export default { createOne, findOne };
