/*
Thema: Variablen und Konstanten mit Zeichenketten (Strings)

Wichtig, wenn Werte einer Variable zugewiesen werden:
Das '='-Zeichen ist ein Zuweisung-Operator und
nicht ein mathematisches Gleichheitszeichen!!!
 */

/*
Beispiel 1 - Stadt und Land ausgeben
 */
let snowBoardLabel = 'Burton';
const manufacturer1 = 'USA'
let motto = 'Buy a '+ snowBoardLabel +
    ' and you fly over snow. Of course made in '
    + manufacturer1 + '.';
console.log(motto);

snowBoardLabel = 'Stöckli';
const manufacturer2 = 'Switzerland'
motto = 'Buy a '+ snowBoardLabel +
    ' and you fly over snow. Of course made in '
    + manufacturer2 + '.';
console.log(motto);
