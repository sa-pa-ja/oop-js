// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   greet() {
//     console.log(`Hi I am ${this.name}`);
//   }

//   static info() {
//     console.log("The animal are friendly");
//   }
// }

// const dog = new Animal("Little bear");
// dog.greet();

// const str = "Hello, world!!".toUpperCase();
// console.log(str);

// const numbers = [1, 3, 4, 5, 6];
// const increase = [...numbers, 400, 600, 700];
// console.log(increase);

// const letters = ["a", "b", "c"];
// // const [one, two, three] = letters;
// // console.log(one);
// // console.log(two);
// // console.log(three);

// const [one,, three] = letters;
// console.log(one);
// console.log(three);

const person = {
  name: "Lucy",
  age: 70,
  message: `Hello guys, ${this.name} and my age is: ${this.age}`,
};

// const {name, message} = person;

// console.log(name);
// console.log(message);

// const { name: personName, message: messagePerson } = person;
// console.log(personName);
// console.log(messagePerson);

// function greet({ name, age }) {
//   console.log(`Hello my friends, my name is: ${name} and my age is: ${age}`);
// }

// greet(person);

// function Colors([one, three]) {
//   console.log(
//     `My favorite colors is: ${one} and myu second color is: ${three}`
//   );
// }

// const colors = ["blue", "orange", "magenta"];
// Colors(colors);

// const a = [1];
// const [one, three = 3] = a;
// console.log(one);
// console.log(three);

// const user = {
//   id: 10,
//   name: "Robert",
// };

// const { name, occupation = "massager" } = user;

// console.log(name);
// console.log(occupation);

// function add(...numbers) {
//   return numbers.reduce(function (a, x) {
//     return a + x;
//   });
// }

// console.log(add(1, 2, 3, 4));

// const userCompleteInfo = {
//   name: "Robert",
//   age: 70,
//   address: {
//     city: "Washington",
//     country: "United States",
//   },
// };

// const {
//   name: userName,
//   address: { city: userCity, country: userCountry },
// } = userCompleteInfo;

// console.log(userName);
// console.log(userCountry);
// const array = [
//   [1, 2, 3],
//   [200, 400],
// ];
// const [[a, b, c], [d, e]] = array;
// console.log(a, b, c, d, e);
