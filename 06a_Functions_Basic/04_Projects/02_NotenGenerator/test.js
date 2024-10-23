function genRand(min, max, decimalPlaces) {
    let rand = Math.random()*(max-min) + min;
    let power = Math.pow(10, decimalPlaces);
    let num = Math.floor(rand*power) / power;
    return Math.round(num*2)/2;
}

function avg(){
    const arr = [1, 2, 3, 4, 5];
    const average = arr.reduce((a, b) => a + b, 0) / arr.length;
    console.log(average);
}

for (let i=0;i<20; i++) {
    console.log(genRand(2, 6, 1));
}






