/*
Thema: Vergleichsoperatoren und Boolean (Wahrheitswerte)
 */
// == - equality operator value
// === - equality operator value AND type checking!
// != - no equal operator!
// !== - no equal operator  AND type checking!
// < - less than operator
// > - greater than operator
// <= - less than or equal to operator
// >= - greater than or equal to operator

/*
Beispiel 1 - Werte miteinander vergleichen und ausgeben
 */

let a = 5;
let b = '5';
// console.log(a==b);
// console.log(a===b);

a=6;b='6';
// console.log(a==b);
// console.log(a===b);

a=8;b='8';
// console.log(a!=b);
// console.log(a!==b);

/*
Beispiel 2 - Datentyp überprüfen mit typeof
 */

//Datentyp mit typeof überprüfen
let city = 'Zürich';
// console.log(typeof city == 'string');
// console.log(`city ist vom Typ ${typeof city}`);

let zahl1 =5;
// console.log(typeof zahl1 == "number");
// console.log(`zahl1 ist vom Typ ${typeof zahl1}`);


// let object1 = undefined;
// console.log(typeof object1 == "undefined");
// console.log(`object1 ist vom Typ ${typeof object1}`);

