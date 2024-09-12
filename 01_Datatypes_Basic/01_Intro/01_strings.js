/*
Thema: Variablen und Konstanten mit Zeichenketten (Strings)

Wichtig, wenn Werte einer Variable zugewiesen werden:
Das '='-Zeichen ist ein Zuweisung-Operator und
nicht ein mathematisches Gleichheitszeichen!!!
 */

/*
Beispiel 1 - Stadt und Land ausgeben
 */
let city = 'Bern';
const country = 'Schweiz';

city = 'Zürich';

//Verbindung von zwei Strings
const KOMMA = ', ';

let location = city + KOMMA + country;
console.log(location);

let plz = '8000';
location = plz + ' ' + city + KOMMA + country;
console.log(location);

// 8000 Zürich, Schweiz

/*
//neue Stadt setzen
city = "Bern";
location = city + ', ' + country;
console.log(location);


//neues Land und neue Stadt
city = "Roma";
//country = "Italia"; //TypeError: Assignment to constant variable.
const country2 = "Italia";
location = city + ', ' + country2;
console.log(location);



*/