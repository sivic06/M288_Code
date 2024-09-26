/*
Task: Traffic light with argument color
A. Re-wright traffic light example with color as an argument.
B. If no argument is provided then traffic light is out of order.

Test:
$ node a01-A.js
Traffic light is undefined
OUT OF ORDER



$ node a01-A.js red
Traffic light is red
DON'T WALK!

$ node a01-A.js orange
Traffic light is orange
ATTENTION

$ node a01-A.js green
Traffic light is green
WALK

*/
'use strict';
//Read (parse) argument
let myArg = process.argv.slice(2)
console.log(`Argumente: `, myArg)

let trafficlight = myArg[0]

//??
//Check with if-then-else
if (trafficlight === undefined) {
  console.log(`Traffic light is ${myArg}`)
  console.log(`OUT OF ORDER`);
}
else if (trafficlight === `red`){
  console.log(`Traffic light is red`)
  console.log(`DON'T WALK!`);
}

else if (trafficlight === `orange`){
  console.log(`Traffic light is orange`)
  console.log(`ATTENTION!`);
}

else if (trafficlight === `green`){
  console.log(`Traffic light is green`)
  console.log(`WALK`);
}
//??
//??
//??
//??
//??
//??
//??
//??
//??
//??
//??
//??

