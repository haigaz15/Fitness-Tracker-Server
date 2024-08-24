class SignUpDTO {
  constructor(data) {
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.username = data.username;
    this.email = data.email;
    this.password = data.password;
  }
}

class LogInDTO {
  constructor(data) {
    this.username = data.username;
    this.password = data.password;
  }
}

module.exports = { SignUpDTO, LogInDTO };
