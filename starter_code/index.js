const Elevator = require('./elevator.js');
const Person = require('./person.js');

let newElevator = new Elevator;

let Bob = new Person("Bob", 0, 3);
let Alice = new Person("Alice", 0, 7);
let John = new Person("John", 6, 3);
let Stuart = new Person("Stuart", 8, 10);
let Jane = new Person("Jane", 5, 0);
let Steve = new Person("Steve", 2, 3);

newElevator.call(Bob);
newElevator.call(Alice);
newElevator.call(John);
newElevator.call(Stuart);
newElevator.call(Jane);
newElevator.call(Steve);

// console.log(Bob);
// console.log(Bob.originFloor);
// console.log(newElevator.requests);
// console.log(newElevator.requests[2]);


newElevator.start();
