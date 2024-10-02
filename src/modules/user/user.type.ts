export interface UserEntity {
   firstName: string;
   lastName: string;
   username: string;
   email: string;
   password: string;
   weight: number | null;
   height: number | null;
}

export enum Role {
   ADMIN = 'admin',
   MEMBER = 'member',
}
