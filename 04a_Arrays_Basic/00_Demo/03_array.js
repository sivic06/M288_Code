/*
 Example 3 - Car Manager v0.1
 */
//Blackbox
const readline = require('readline');
function askQuestion(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise(resolve => rl.question(query, ans => {
        rl.close();
        resolve(ans);
    }))
}

let autos = ['Ferrari'];
let title = '============================================\n'+
    'Car Manager v0.1\n'+
    '============================================\n'
console.log(title);
console.log(autos);
