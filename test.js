//discount.js
let args = process.argv.slice(2);
let price = args[0];
let age = args[1];
let isMember = args[2];
let message;
if ((age === undefined) || (price === undefined)){
    message = `You need to define the price and the age! Try again.`;
} else {
    let discount;
    if (age <= 8) {
        message = `Free entrance!`;
    }
    else if ((9 <= age) && (age <= 17)) {
        discount = .4;
        message =
            `${discount * 100}% discount and`+
            ` pay CHF ${((1-discount)*price).toFixed(2)}!`;
    }
    else if (age >= 55 || isMember) {
        discount = .25;
        message =
            `${discount * 100}% discount and`+
            ` pay CHF ${((1-discount)*price).toFixed(2)}!`;
    } else {
        discount = 1.0;
        message= `NO discount and pay CHF ${(price*discount).toFixed(2)}!`;
    }
}
console.log(message);