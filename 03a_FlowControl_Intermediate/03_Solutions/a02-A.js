/*
Task: Compute discounted price
A. Using if-then-else, determine discounts on a given price correctly based on comments below.
B. Check with different values for variable 'price and 'age' that discounts
are computed correctly.

Sample output
$ node a02.js
You need to define the price and the age! Try again.

$ node a02.js 50 5
With 5: Free entrance!

$ node a02.js 50 7
With 7: You will get a 50.00% discount!Pay CHF 25.00

$ node a02.js 50 15
With age 15: You will get a 50.00% discount! Pay CHF 25.00.

$ node a02.js 50 21
With age 21: NO discount! Pay CHF 50.00.

$ node a02.js 50 21 true
You are 21 years old: You receive 33.33%!
You pay CHF 33.33!

$ node a02.js 50 65
You are 65 years old: You receive 33.33%!
You pay CHF 33.33!
 */
'use strict';
//Argumente auslesen (parsen)
let args = process.argv.slice(2);
let price = args[0]
let age = args[1]
let isStudent = args[2]

//message variable
let message;
//if age and price is undefined ...
if (age === undefined || price === undefined) {
    //set message
    message = `usage: a02.js price age\n` +
        `Please provide both arguments. Exit!`
} else {
    let discount;
    // If 6 under print message free entrance
    if (age < 6){
        message = `You are ${age} years old: You have free entrance!`
    }
    //else if age between 6 and 16 then set discount to 50%
    else if (6 <= age && age <= 16){
        //set discount
        discount=.5; // 1/2
        message =
            `You are ${age} years old: You receive ${discount*100}%!\n`+
            `You pay CHF ${(discount*price).toFixed(2)}!`
    }
    //else if 65 equal or older or student then set discount to 33%
    else if (age >=65 || isStudent){
        //set discount
        discount=1/3; // 1/2
        message =
            `You are ${age} years old: You receive ${(discount*100).toFixed(2)}%!\n`+
            `You pay CHF ${((1-discount)*price).toFixed(2)}!`
    } else {
        message =
            `You are ${age} years old: You don't receive any discount!\n`+
            `You pay CHF ${parseFloat(price).toFixed(2)}!`
    }
//Output what the customer has to pay
}
console.log(message);
