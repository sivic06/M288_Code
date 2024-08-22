/*
Thema: Variablen und Konstanten mit Zeichenketten (Strings)

Wichtig, wenn Werte einer Variable zugewiesen werden:
Das '='-Zeichen ist ein Zuweisung-Operator und
nicht ein mathematisches Gleichheitszeichen!!!
 */

/*
Beispiel 1 - Stadt und Land ausgeben
 */
let fussballverein = 'Barcelona';
let spieler = 'Ronaldo';
const Land = 'Spanien';

// console.log(fussballverein);
// console.log(spieler);
// console.log(Land);

//Verbindung von zwei Strings
let club = fussballverein + ', ' + spieler;
console.log(club);
club = 'Der Spieler '+ spieler +' im Verein ' + fussballverein+ ' ist im Land ' + Land +'.';
console.log(club);
fussballverein = 'Paris Saint German';
spieler = 'Mbappe';
const Land2 = 'Frankreich';
club = 'Der Spieler '+ spieler +' im Verein ' + fussballverein+ ' ist im Land ' + Land2 +'.';
console.log(club);




