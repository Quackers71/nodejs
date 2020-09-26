const tutorial = require('./tutorial');

console.log(tutorial.sum(1,1));
console.log(tutorial.PI);
console.log(new tutorial.SomeMathObject()); // creates a new instance of the SomeMathObject()

// Output
// $ node app
// { sum: [Function: sum],
//   PI: 3.14,
//   SomeMathObject: [Function: SomeMathObject] }