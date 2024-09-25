import { Prisma, User } from '@prisma/client';

export type IUser = Omit<User, 'id'>;

export type IUserWhereInput = Prisma.UserWhereInput;

export type IUserWhereUniqueInput = Prisma.UserWhereUniqueInput;

export type IUserCreateInput = Prisma.UserCreateInput;

export type IUserUpdateInput = Prisma.UserUpdateInput;
