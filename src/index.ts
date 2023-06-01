// class User {
//   public email: string;
//   name: string;
//   readonly city: string = "Rangpur";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
class User {
  readonly city: string = "Rangpur";
  constructor(
    public email: string,
    public name: string
  ) // private userId: string
  {}
}

const ahsan = new User("ah@san.com", "ahsan");
