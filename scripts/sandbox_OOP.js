// object Oriented Programming

// the 'new' keyword
// 1 - it creates a new empty object {}
// 2 - it binds the value of 'this' to the new empty object
// 3 - it calls the constructor function to build the object

/* ***Old way of defining  constructor Object before classes *** */
function User(username, age, email, address) {
  this.username = username;
  this.age = age;
  this.email = email;
  this.address = address;
  this.score = 0;

  /* Defining Methods inside the Constructor,
   which is unprofessional */

  // this.login = function () {
  //   console.log(`You are logged in Amigo ${this.username}`);
  //   return this;
  // };
  // this.logout = function () {
  //   console.log(`You are logged out friend ${this.username}`);
  //   return this;
  // };
  // this.incScore = function () {
  //   this.score += 1;
  //   console.log(`${this.username} has a score of ${this.score}`);
  //   return this;
  // };
}

/* How to attach methods to the prototype directly, which better than
inside the constructor Object and is professional */
User.prototype.login = function () {
  console.log(`You are logged in Amigo ${this.username}`);
  return this;
};

User.prototype.logout = function () {
  console.log(`You are logged out friend ${this.username}`);
  return this;
};

User.prototype.incScore = function () {
  this.score += 1;
  console.log(`${this.username} has a score of ${this.score}`);
  return this;
};

/* Prototypal Inheritance Old way constructor Object before classes were introduced */
function Admin(username, age, email, address, title) {
  User.call(this, username, age, email, address);
  this.title = title;
}

/*  Prototypal Inheritance of User constructor methods login() logout() incScore() etc.. if we had anymore, again old way */
Admin.prototype = Object.create(User.prototype);

/* Adding a method ONLY for the Admin constructor not the User constructor  */
Admin.prototype.deleteUser = function () {
  // delete a user
};

// class User {
//   constructor(username, age, email, address) {
//     // set up properties
//     this.username = username;
//     this.age = age;
//     this.email = email;
//     this.address = address;
//     this.score = 0;
//   }

//   login() {
//     console.log(`You are logged in Amigo ${this.username}`);
//     return this;
//   }

//   logout() {
//     console.log(`You are logged out friend ${this.username}`);
//     return this;
//   }

//   incScore() {
//     this.score += 1;
//     console.log(`${this.username} has a score of ${this.score}`);
//     return this;
//   }
// }

// class Admin extends User {
//   constructor(username, age, email, address, title) {
//     super(username, age, email, address);
//     this.title = title;
//   }
//   deleteUser(user) {
//     users = users.filter((item) => item.username !== user.username);
//   }
// }

// instance of the User class
const userOne = new User("Mario", 55, "mario@gmail.com", "Mai mi beach");

// userOne.login().incScore().incScore().incScore().logout();

// instance of the User class
const userTwo = new User("Luigi", 88, "luigi@gmail.com", "china Town");

// userTwo.logout();

// instance of the User class
const userThree = new User("Lui ei", 44, "lui_ei@gmail.com", "palestine");

// instance of the Admin class extended from User

const userFour = new Admin(
  "manPogy",
  15,
  "poggyman@gmail.com",
  "cali",
  "black-belt-ninja"
);
// console.log(userOne);
// console.log(userFour);

// console.log(userOne, userTwo, userThree, userFour);

// userThree.login();
// userThree.incScore();

// let users = [userOne, userTwo, userThree, userFour];
// console.log(users);

// userFour.deleteUser(userTwo);
// console.log(users);
