
// Mit var werden Variablen “gehoisted”, das bedeutet, dass ihre Deklarationen an den Anfang ihrer Funktion oder des globalen Kontexts verschoben werden. 
// Das kann zu verwirrendem Verhalten führen:
console.log(x); // undefined, keine Fehlermeldung
var x = 5;

// Mit let oder const würde dieser Code einen Fehler werfen:
console.log(y); // ReferenceError: y is not defined
let y = 5;

// var hat eine andere Gültigkeitsbereich (Scope) als let und const. var ist funktions-skopiert, während let und const block-skopiert sind. 
// Das bedeutet, dass var-Variablen auch außerhalb von Blöcken wie if, for, while, etc. sichtbar sind, was zu unerwarteten Problemen führen kann.
if (true) {
    var a = 10;
}
console.log(a); // 10, obwohl `a` innerhalb eines Blocks definiert wurde

if (true) {
    let b = 20;
}
console.log(b); // ReferenceError: b is not defined

// Mit var kannst du dieselbe Variable mehrmals im selben Scope deklarieren, ohne einen Fehler zu bekommen, was zu Problemen führen kann:
var x = 1;
var x = 2;
console.log(x); // 2