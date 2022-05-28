class User {
  constructor(name) {
    this.name = name;
  }

  getName() {
    console.log(this.name);
  }

  getIntroduction() {
    console.log(`Hi, my name is ${this.name}`);
  }
};

const users = [
  new User('Uma'),
  new User('Josh'),
  new User('Ollie')
];

class UserBase {
  constructor(users) {
    this.users = users;
  }
  
  count() {
    return this.users.lenght;
  }

  getNames() {
    this.users.map(user => console.log(user.name));
  }

  getIntroductions() {
    this.users.map(user => console.log(`Hi, my name is ${user.name}`))
  }
};