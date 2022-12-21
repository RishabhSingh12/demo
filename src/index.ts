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
  private _count = 1;

  constructor(public email: string, public name: string) {
    (this.email = email), (this.name = name);
  }

  getEmail(): string {
    return this.email;
  }

  get Count(): number {
    return this._count;
  }

  set Count(value) {
    this._count = value;
  }
}

class SubUser extends User {
  isFamily: boolean = true;
  // changeCount(){
  //     this._count = 4
  // }
}

// const u = new User("t@test.com", "lexus");
// console.log(u);

// using interfaces with classes
interface Camera {
  cameraMode: string;
  filter: string;
  burst: number;
}

class Instagram implements Camera {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
}
