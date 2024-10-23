/*
Recapture last lesson
Task: Sum the numbers from 17 to 128
 */
'use strict'
let params = process.argv.slice(2);
// console.log(params);
let start=parseInt(params[0]);
let ende=parseInt(params[1]);
let sum=0;
for (let i=start;i<=ende;i++){
    //sum = sum +i;
    sum += i;
}
console.log(`die Summe von ${start} bis ${ende} ist ${sum}`);
