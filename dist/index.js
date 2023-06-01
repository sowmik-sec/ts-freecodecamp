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
    constructor(email, name // private userId: string
    ) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Rangpur";
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const ahsan = new User("ah@san.com", "ahsan");
