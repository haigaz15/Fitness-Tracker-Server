import { IUserCreateInput } from '../../user/user.type';
import { ILoginInterface } from '../auth.type';

export class SignUpDTO {
   firstName: string;
   lastName: string;
   username: string;
   email: string;
   password: string;
   constructor(data: IUserCreateInput) {
      this.firstName = data.firstName;
      this.lastName = data.lastName;
      this.username = data.username;
      this.email = data.email;
      this.password = data.password;
   }
}

export class LogInDTO {
   username: string;
   password: string;
   constructor(data: ILoginInterface) {
      this.username = data.username;
      this.password = data.password;
   }
}
