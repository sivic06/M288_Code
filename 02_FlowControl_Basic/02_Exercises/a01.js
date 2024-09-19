/*
Tasks: Make an appropriate suggestion based on the temperature
Declare and print variables, constants correctly based on the given comments below.
*/
'use strict';
let temp = 15;
//When temperature is lower equal 4 ...
if (temp <= 4) {
//It is .. °C and it's freezing outside!
console.log(`It is ${temp} and it's freezing outside bruv!`);
}

//Else when temperature is lower equal 25 ...
else if (temp <= 25 ) 
    //It's .. °C and pretty nice out!
    {
    console.log(`It's ${temp}°C and pretty nice out!`);
}
    

// Else when temperature is more equal 35 ...
else if (temp >= 3)

    console.log(`It is ${temp} °C and very hot outside!`)
    //It is .. °C and  and very hot outside!
//??
//Else
else {
    console.log(`It's ${temp}°C and still quite warm!`)
}
    //It's .. °C and still quite warm!
//??
//??


