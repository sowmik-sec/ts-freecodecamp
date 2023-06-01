"use strict";
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
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.city = "Rangpur";
    }
}
const ahsan = new User("ah@san.com", "ahsan");
