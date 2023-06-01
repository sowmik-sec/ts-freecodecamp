class User {
  email: string;
  name: string;
  readonly city: string = "Rangpur";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const ahsan = new User("ah@san.com", "ahsan");
