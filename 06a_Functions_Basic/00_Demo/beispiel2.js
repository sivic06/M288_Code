let lb1 = {
    farbe: "rot",
    serialnumber: "sn-31423432",
    nops_geometry: "2x4",
    description: "basic element",
    prize: "1",
    currency: "DK",
    getFullDescription() {
        return `${this.description} with geometry ${this.nops_geometry}`;
    }
}

//console.log(lb1.description);
lb1.description = "asdfasdf";
console.log(lb1.description);
