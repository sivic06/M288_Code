/*
Thema: Variablen und Konstanten mit Zeichenketten (Strings)

Wichtig, wenn Werte einer Variable zugewiesen werden:
Das '='-Zeichen ist ein Zuweisung-Operator und
nicht ein mathematisches Gleichheitszeichen!!!
 */

let mittagsMenu = 'Pinsa';
let variante = 'glutenfrei';
const ort = 'Truck Horgen'

let meldung = 'Das heutige Mittagsmenu ist '+ mittagsMenu
    + ' im '+ ort + ' in der Variante '+variante+'.';
console.log(meldung);


mittagsMenu = 'Pizza';
variante = 'vegetarisch und Fleisch';
const ort2 = 'Truck Richterswil'

meldung = 'Das heutige Mittagsmenu ist '+ mittagsMenu
    + ' im '+ ort2 + ' in der Variante '+variante+'.';
console.log(meldung);
