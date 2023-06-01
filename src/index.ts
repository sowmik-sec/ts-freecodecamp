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
  private _courseCount = 1;

  readonly city: string = "Rangpur";
  constructor(
    public email: string,
    public name: string // private userId: string
  ) {}
  get getAppleEmail(): string {
    return `apple${this.email}`;
  }
  get courseCount(): number {
    return this._courseCount;
  }
  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course count should be more than 1");
    }
    this._courseCount = courseNum;
  }
}

const ahsan = new User("ah@san.com", "ahsan");
