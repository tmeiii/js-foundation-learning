// let arr = ["A", "B", "C"];
// console.log(arr);

// let arrNums = [1, 2, 3];
// console.log(arrNums);
// console.log(arrNums[0]);
// console.log(arrNums[arrNums.length - 1]);

// console.log(arrNums[5]);

// arrNums[5] = 5;
// console.log(arrNums);

// console.log(arrNums[4])

// const arr = ["A", "B", "C"];
// arr[0] = "BB";
// console.log(arr);

// const arr = new Array("A", "B", "C");
// console.log(arr);

// const arr = new Array(1,2,3);
// console.log(arr);
// const arr2 = new Array(20);
// console.log(arr2.length);
// console.log(arr2[10]);

// const arr = [1, "abc", {
//   ten: "CCC",
//   age: "u40"
// }, ["x", "y", "z"]]

// console.log(arr);
// console.log(typeof arr);

// const arr = ["A", "B", "C"];
// arr[arr.length] = "BB";
// console.log(arr);

// arr.push("XXXX");

// console.log(arr);

// arr.unshift("YYY");
// console.log(arr);

// arr.shift();
// console.log(arr);

// console.log(arr.pop());
// console.log(arr);

// const arr = ["A", "B", "C"];
// arr.splice(1,2, "D", "F");
// arr.splice(1,2);
// console.log(arr);

// const arr = ["A", "B", "C", "D", "E", "F"];
// console.log(arr.slice(2,5));
// console.log(arr);

// const arr = ["A", "B", "C", "D", "E", "F"];
// console.log(arr.join("-"));

// const arr = ["A", "B", "C", "D", "E", "F"];
// console.log(arr.join());

// const arr = ["A", "B", "C", "D", "E", "F"];
// delete arr[1];

// console.log(arr);

// const arr = ["B", "C", "A", "D", "E", "F"];
// console.log(arr.sort().reverse());

// const arr =[1,7, 10, 12, 20, 29, 30];

// console.log(arr.sort(function (a, b){ return b-a}));

// const students = [
//   {
//     studentName: "Tan",
//     age: 10
//   },
//   {
//     studentName: "Minh",
//     age: 9
//   },
//   {
//     studentName: "Chi Ha",
//     age: 30
//   },
//   {
//     studentName: "Son",
//     age: 15
//   }
// ]

// const person = {firstName:"John", lastName:"Doe", age:46};
// console.log(person.firstName)
// // Kết quả: John

// console.log(new Date());
// console.log(new Date().toTimeString());
// console.log(new Date().toUTCString());
// console.log(new Date("10-11-2023"));
// console.log(new Date("10/11/2023"));
// console.log(new Date("10/11/2023 T 20:30:60"));

// new Date()
// new Date(date string)

// new Date(year,month)
// new Date(year,month,day)
// new Date(year,month,day,hours)
// new Date(year,month,day,hours,minutes)
// new Date(year,month,day,hours,minutes,seconds)
// new Date(year,month,day,hours,minutes,seconds,ms)

// console.log(new Date(24*60*60*1000));

// function doSomthing(action){
//   console.log(action);
// }

// doSomthing("a bc ")

// function add(a,b){
//   console.log(a+b);
// }

// add(2,10);
// add(2,17);

// let a = add(1,2);
// console.log(a);


// function add(a, b) {
//   return a + b;
// }

// let a = add(1, 2);
// console.log(a);

// const add = function(a,b){
//   return a+b;
// }
// console.log(add(2,9));

// const add = (a,b)=> {
//   return a+b;
// }

// console.log(add(2,9));


// let add = (a,b)=> {
//   return a+b;
// }

// add = 1;

// console.log(add(2,9));

// console.log(add(2,9));
// function add(a,b) {
//   return a+b;
// }

// function doSomthing(x){
//   function dododo(y){
//     function dadata(z){
//       return y+z;
//     }
//     return dadata(y);
//   }

//   return dododo(x);
// }

// console.log(doSomthing(3,2,1));
// function dodo (a){
//   return a*a;
// }

// function add(a,b){
//   return a+ b(a-1);
// };

// console.log(add(3, dodo));

// function adds(a, b, ...more){
//   console.log(a);
//   console.log(b);
//   console.log(more);
// }

// adds(1,0,6,8,9);


// function dodo(){
//   console.log(arguments);
// }

// dodo(1,3,5,7,9);
// function outside(x) {
//     function inside(y) {
//       return x + y;
//     }
//     return inside;
//   }
  
//   const fnInside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give it
//   console.log(fnInside(5)); // 8
//   console.log(outside(3)(5)); // 8