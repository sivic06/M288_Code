//Array definieren mit 26 Kantonen
//let kantone = ['Zürich', 'Bern', ...,'Aargau','Jura'];

//Arrays mit Index ausgeben
console.log(kantone[0]);
console.log(kantone[1]);
console.log(kantone[2]);
console.log(kantone[3]);
//...
console.log(kantone[25]);

//Gleiches Arrays mit for-Loop ausgeben
for(let i = 0; i < 26; i++) {
    console.log(kantone[i]);
}

//Gleiche Ausgabe mit while
let i=0;
while(i<26){
    console.log(kantone[i]);
    i++;
}

//Gleiche Ausgabe mit for..of
//Ausgabe der Werte (iterates over property values)
for (let kanton of kantone) {
    console.log(kanton);
}

//Ausgabe nur der Indices mit for..in
// (iterates over property names)
for (let kanton in kantone) {
    console.log(kanton);
}
