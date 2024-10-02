interface LoginInput {
   username: string;
   password: string;
}

interface SignUpInput {
   firstName: string;
   lastName: string;
   username: string;
   email: string;
   password: string;
   role: string | undefined;
}

export class SignUpDTO {
   firstName: string;
   lastName: string;
   username: string;
   email: string;
   password: string;
   role: string | undefined;
   constructor(data: SignUpInput) {
      this.firstName = data.firstName;
      this.lastName = data.lastName;
      this.username = data.username;
      this.email = data.email;
      this.password = data.password;
      this.role = data.role;
   }
}

export class LogInDTO {
   username: string;
   password: string;
   constructor(data: LoginInput) {
      this.username = data.username;
      this.password = data.password;
   }
}
