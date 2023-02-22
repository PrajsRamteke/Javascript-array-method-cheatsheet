//Array
//*********Array that modify the orignal array*********
// const hero = ["Superman", "Batman", "Spiderman"];
// console.log(hero.length);

// hero.push("ironman"); // add at the end
// console.log(hero);

// hero.unshift("hulk");// add at the start
// console.log(hero);

// hero.pop(); //remove at the end element
// console.log(hero);

// hero.shift(); //remove at the end element
// console.log(hero);

// hero.splice(1, 1); //remove any (index)
// console.log(hero);

//reverse()
// let arr = [5, 7, 4, 9, 2, 8];
// arr.reverse();
// console.log(arr);

//sort()
// let arr = [5, 7, 4, 9, 2, 8];
// arr.sort();
// console.log(arr);

//*********Array that gives the new array*********
// let Fletters = ["a", "b", "c"];
// let store = Fletters.join("-");
// console.log(store);

// let Fletters = ["a", "b", "c"];
// let Lletters = ["x", "y", "z"];
// let newArray = Fletters.concat(Lletters);
// console.log(newArray);

// const hero = ["Superman", "Batman", "Spiderman", "ironman"];
// const store = hero.slice(1, 3);
// console.log(store);

// const students = [
//   {
//     name: "eren",
//     marks: 40,
//     power: 30,
//   },
//   {
//     name: "zeke",
//     marks: 60,
//     power: 40,
//   },
//   {
//     name: "armin",
//     marks: 70,
//     power: 60,
//   },
// ];

//calculate less than 50 marks failed student
//filter
// const failed = students.filter((student) => {
//   return student.marks < 50;
// });
// console.log(failed);

//calculate write only student names
//map
// const names = students.map((student) => {
//   return student.name;
// });
// console.log(names);

//calculate the total power and add 20 extra power in total power
//reduce
// const totalPower = students.reduce((temp, student) => {
//   return (temp = temp + student.power);
// }, 0);
// console.log(totalPower);
// console.log(totalPower + 20);

//indexof
// const admins = [4, 8, 2, 9];
// const users = {
//   name: "rahul",
//   id: 9,
// };

//indexof (its give only index its not give booliens value)
// const result = admins.indexOf(users.id);
// console.log(result);

// include (true and false)
// const result = admins.includes(users.id);
// if (result == true) {
//   console.log("user found");
// } else {
//   console.log("user not found");
// }
// console.log(result);

// let arr = [5, 7, 4, 9, 2, 8];
// let store = arr.at(5); //similar as length
// console.log(store);

//********used loop in array********* */

// const students = [
//   {
//     name: "eren",
//     marks: 50,
//   },
//   {
//     name: "zeke",
//     marks: 60,
//   },
//   {
//     name: "armin",
//     marks: 70,
//   },
// ];

// for (let i = 0; i < students.length; i++) {
//   students[i].marks = students[i].marks + 10;
// }
// console.log(students);

// students.forEach((element) => {
//   return (element.marks += 10);
// });
// console.log(students);

// for (let student of students) {
//   student.marks += 10;
// }
// console.log(students);

// for (let student in students) {
//   student.marks += 10;
// }
// console.log(students);
