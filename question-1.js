// Question #1
const myTodo = [
  { id: 1, todo: "Buy groceries" },
  { id: 2, todo: "Finish homework" },
  { id: 3, todo: "Call mom" },
  { id: 4, todo: "Wash dishes" },
];
// เริ่มเขียนโค้ดตรงนี้

// Add new object value in array of object
myTodo.push({id: 5, todo: "Walk the dog"});
console.log(myTodo);

// Reassgin id 4 (index 3)
console.log(myTodo.length);
myTodo[3].todo = "Go to the gym";
console.log(myTodo[3]);
console.log(myTodo);

// delate last object in array
myTodo.pop();
console.log(myTodo);

// console.log last object in array
console.log(`To-do id: ${myTodo[3].id}, ${myTodo[3].todo}`)