/*
Thema: Loops (Schleifen) mit Arrays
Wichtig:
- Erstes Element beginnt immer bei Index = 0
- Letzes Element ist bei Index = Array-Länge minus 1
 */
/*
 Beispiele - Arrays mit while-Loop ausgeben
*/
//Array definieren
let klassen = ['ME20', 'ME21', 'ME22', 'ME23'];
console.log("Ausgabe mit Parallel-Klassen (Ausgabe mit for)");

for(let i=0;i<klassen.length;i++){
    let bezeichnung = 0x61; //Dezimal 97
    let klasse=klassen[i];
    for(let j=0;j<5;j++){
        console
            .log(`Mediamatiker-Klasse ${klasse}${String.fromCharCode(bezeichnung)}`)
        bezeichnung++;
    }
}
