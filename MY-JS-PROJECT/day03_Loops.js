//?? LOOPS

//*1) For Loop

for (let i = 0; i <= 5; i++) {
  console.log(i); //0 1 2 3 4 5
}

//*2) For Of Loop

const iterable = [0, 1, 2, 3, 4, 5];
for (let a of iterable) {
  console.log(a); //0 1 2 3 4 5
}

//soru

const todo = [
  {
    id: 1,
    task: "meeting",
    isComplete: true,
  },
  {
    id: 2,
    task: "shopping",
    isComplete: true,
  },
  {
    id: 3,
    task: "doctor",
    isComplete: true,
  },
];
//1.yol
for (let i = 0; i < todo.length; i++) {
  console.log(todo[i].id);
  console.log(todo[i].task);
  console.log(todo[i].isComplete);
}

//2.yol
for (let x of todo) {
  console.log(x);
}
//{id: 1, task: "meeting", isComplete: true}
//{id: 2, task: "shopping", isComplete: true}
//{id: 3, task: "doctor", isComplete: true}

//*3) For Each

const myArray = [1, 2, 3, 4];
myArray.forEach(function (eachItem) {
  console.log(eachItem);
});
//arrow
myArray.forEach((eachItem) => console.log(eachItem));
