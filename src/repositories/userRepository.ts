import prisma from '../core/prisma-client';
import {
   PrismaUser,
   PrismaUserCreateInput,
   PrismaUserUpdateInput,
   PrismaUserWhereUniqueInput,
} from '../modules/user/user.prisma.type';

const createOne = async (data: PrismaUserCreateInput): Promise<PrismaUser> => {
   return await prisma.user.create({ data });
};

const findOne = async (
   query: PrismaUserWhereUniqueInput
): Promise<PrismaUser | null> => {
   return await prisma.user.findUnique({ where: query });
};

const findByIdAndUpdate = async (
   query: PrismaUserWhereUniqueInput,
   updatedFields: PrismaUserUpdateInput
) => {
   await prisma.user.update({ where: query, data: updatedFields });
};

export default { createOne, findOne, findByIdAndUpdate };
