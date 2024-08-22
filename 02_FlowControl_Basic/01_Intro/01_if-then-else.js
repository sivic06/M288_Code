/*
Thema: if-then-else ("wenn-dann-sonst", conditional statements)
    und switch-case
 */
/*
Example 1 - Traffic Light
 */

//Input
let color = 'orange';
console.log(`Traffic light is ${color}`);
//Verarbeitung
if (color === 'red'){
    console.log(`DON'T WALK`);
}
else if (color === 'orange'){
    console.log(`ATTENTION`);
}
else if (color === 'green'){
    console.log(`WALK`);
}
else {
    console.log(`OUT OF ORDER`);
}

/*
Example 2 - Is it cold or warm?
 */

//Input
let temp = 4;

//Überprüfung + Steuerung
let temp = 23;
if (temp < 4){
    console.log(`It's ${temp}°C and it's freezing. Please take your coat!`)
} else if (4 <= temp && temp <=10){
    console.log(`It's ${temp}°C and it's cold. Please take your pullover!`)
} else if (11 <= temp && temp <=20){
    console.log(`It's ${temp}°C and it's pleasant. Please take only a light jacket!`)
} else {
    console.log(`It's ${temp}°C and no advise available!`)
}


