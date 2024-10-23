let log = console.log;
const personen = [{
    name: 'Andrew',
    age: 27
}, {
    name: "Fritz",
    age: 31
}, {
    name: "Anna",
    age: 22
}];

let age=30;
log(`filter all person with age < ${age}?`);

let filter1 = personen.filter((person) => {
    return person.age === 30
})
log(filter1);

filter1 = personen.filter((person) => {
    return person.name === "Anna"
})
log(filter1);
