let kunde1 = require('./02a_object');



let kunde2 = kunde1;
kunde2.firstName = "Anna";
kunde2.gender ="female";
kunde2.birthday = new Date('1980-04-03');

kunde1.firstName = "Hans";
kunde1.gender ="male";

console.log(`Fullname ${kunde1.getFullName()}`)
console.log(`Birthday: ${kunde1.birthday}`)
console.log(`Gender: ${kunde1.gender}`);

console.log(`Fullname ${kunde2.getFullName()}`)
console.log(`Birthday: ${kunde2.birthday}`)
console.log(`Gender: ${kunde2.gender}`);
