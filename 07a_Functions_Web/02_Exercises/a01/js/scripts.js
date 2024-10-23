//set variables or constant EUR,CHF & USD
//??
//??
//??
const CHF="chf";
const EUR="eur";
const USD="usd";

//Set conversion i.e. from https://www1.oanda.com/currency/converter/
const CHF_EUR = 1.03646;
const CHF_USD = 1.12564;
const USD_CHF = 0.88819;
const USD_EUR = 0.96463;


//get values from form
let locAm= document.getElementById('localAmount');
let locEx= document.getElementById('localExchange');
let forAm= document.getElementById('foreignAmount');
let forEx= document.getElementById('foreignExchange');

/**
 * function convert amount by exchange rate
 * @param amount
 * @param exchange_rate
 * @returns {string}
 */
function conversion(amount,exchange_rate){
    return Math.fround(amount*exchange_rate).toFixed(4);
}

/**
 *  from CHF to foreign exchange
 */
function localToForeign() {
    /* Ist Ausgangswährung CHF dann ... */
    if (locEx.value === CHF) {
        /* ... und die Zielwährung EUR dann ... */
        if (forEx.value === EUR) {
            /* ... rufe die Funktion auf zur Berechnung des EUR-Kurses  */
            forAm.value = conversion(locAm.value, CHF_EUR);
        }
        if (forEx.value === USD) {
            /* ... rufe die Funktion auf zur Berechnung des USD-Kurses  */
            forAm.value = conversion(locAm.value, CHF_USD);
        }
    }
}

/**
 *  from foreign exchange to CHF
 */
function foreignToLocal() {
    alert("foreignToForeign called");
    /* Ist Ausgangswährung CHF dann ... */
//??
        /* ... und die Zielwährung EUR dann ... */
//??
            /* ... rufe die Funktion auf zur Berechnung des EUR-Kurses  */
//??
//??
//??
            /* ... rufe die Funktion auf zur Berechnung des USD-Kurses  */
//??
//??
//??
}
