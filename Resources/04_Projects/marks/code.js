//TODO: Aufgabenstellung formulieren.
/* Extra-Aufgabe */

function linearNotenSkalaLong (erreichtePunkte, maxPunkte) {
    let note = (erreichtePunkte / maxPunkte) * 5 + 1;
    //let sufficient = 3*erreichtePunkte/5;
    let msg;

    if (note === 6.0) {
        msg = 'hervorragende';
    } else if (note >= 5.5) {
        msg = 'sehr gute';
    } else if (note >= 5) {
        msg = 'gute';
    } else if (note >= 4.5) {
        msg = 'mehr als genügende';
    } else if (note >= 4.0) {
        msg = 'genügende';
    } else {
        msg = 'ungenügende'
    }

    return `Mit ${erreichtePunkte} Punkte haben Sie eine ${msg}`+
        `Note (${note.toFixed(2)}) erzielt!`;
}

let result = linearNotenSkalaLong(9, 21);
console.log(result);
