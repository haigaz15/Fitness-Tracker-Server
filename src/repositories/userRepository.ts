import prisma from '../core/prisma-client';
import {
   IUser,
   IUserCreateInput,
   IUserUpdateInput,
   IUserWhereUniqueInput,
} from '../modules/user/user.type';

const createOne = async (data: IUserCreateInput): Promise<IUser> => {
   return await prisma.user.create({ data });
};

const findOne = async (query: IUserWhereUniqueInput): Promise<IUser | null> => {
   return await prisma.user.findUnique({ where: query });
};

const findByIdAndUpdate = async (
   query: IUserWhereUniqueInput,
   updatedFields: IUserUpdateInput
) => {
   await prisma.user.update({ where: query, data: updatedFields });
};

export default { createOne, findOne, findByIdAndUpdate };
