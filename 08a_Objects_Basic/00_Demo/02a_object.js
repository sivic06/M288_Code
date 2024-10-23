module.exports = {
    firstName: "Hans",
    lastName: "Muster",
    gender: "male",
    birthday: new Date('1973-11-12'),
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}
