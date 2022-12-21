"use strict";
console.log("typescript is here");
// classes in typescript
// 1st way
// class User {
//   email: string;
//   name: string;
//   readonly city: string = "nyc";
//   constructor(email: string, name: string) {
//     (this.email = email), (this.name = name);
//   }
// }
// 2nd way
class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
    this._count = 1;
    (this.email = email), (this.name = name);
  }
  getEmail() {
    return this.email;
  }
  get Count() {
    return this._count;
  }
  set Count(value) {
    this._count = value;
  }
}
class SubUser extends User {
  constructor() {
    super(...arguments);
    this.isFamily = true;
    // changeCount(){
    //     this._count = 4
    // }
  }
}
class Instagram extends Camera {}
