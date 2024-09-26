/*
Task: Compute discounted price
A. Using if-then-else, determine discounts on a given price correctly based on comments below.
B. Check with different values for variable 'price and 'age' that discounts
are computed correctly.

Sample output
$ node a01-A.js
You need to define the price and the age! Try again.

$ node a01-A.js 50 5
With 5: Free entrance!

$ node a01-A.js 50 7
With 7: You will get a 50.00% discount!Pay CHF 25.00

$ node a01-A.js 50 15
With age 15: You will get a 50.00% discount! Pay CHF 25.00.

$ node a01-A.js 50 21
With age 21: NO discount! Pay CHF 50.00.

$ node a01-A.js 50 21 true
With age 21: You will get a 33.33% discount! Pay CHF 16.67.

$ node a01-A.js 50 65
With age 65: You will get a 33.33% discount! Pay CHF 16.67.
 */
'use strict';
//Argumente auslesen (parsen)


let myArg = process.argv.slice(2);

let price = myArg[0]
let age = myArg [1]
let message;
let discount;
let priceWithDiscount

if (price == undefined && age == undefined) {
        message = `You need to define the price and the age! Try again.`
} else if (age < 6) {
        message = `With ${age}: Free entrance!`
} else if (age > 6 && age < 16) {
        discount = 50;
        message = `With ${age}: You will get a ${discount}% discount!`
} else if (age >= 65 || age === `stundent`) {
        discount = 33;
        message = `With/As a ${age}:You will get a ${discount}% discount!`
} else {
        discount = 0
        message = `With ${age}: No discount!`
}



priceWithDiscount = message + `Pay CHF` + (price - price * discount / 100)
console.log(priceWithDiscount)
//message variable

//if age and price is undefined ...


    //show message
//??
//else
//??
    
    // If 6 under print message free entrance
//??
        //show message
//??
//??
    //else if age between 6 and 16 then set discount to 50%
//??
        //set discount
//??
        //show message
//??
//??
//??
//??
    //else if 65 or older or student then set discount to 33%
//??
        //set discount
//??
        //show message
//??
//??
//??
    //else
//??
        //else no discount
//??
        //show message
//??
//??
//??
//Output what the customer has to pay
//??




