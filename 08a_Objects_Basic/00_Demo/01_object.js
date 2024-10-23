
let kunde1={
    firstName: "Hans",
    lastName: "Muster",
    gender: "male",
    birthday: new Date('1973-11-12'),
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

console.log(`Fullname ${kunde1.getFullName()}`)
console.log(`Birthday: ${kunde1.birthday}`)
console.log(kunde1.gender)
