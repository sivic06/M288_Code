class Geraete {
    bezeichnung;
    marke;
    no;
    #anschaffung;
    #laufzeit;

    constructor(bezeichnung, marke, no) {
        this.bezeichnung = bezeichnung;
        this.marke = marke;
        this.no = no;
    }


    get kaufdatum() {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return this.#anschaffung.toLocaleDateString('de-CH',options);
    }

    set kaufdatum(value) {
        this.#anschaffung = value;
    }

    get abschreibungNach() {
        return this.#laufzeit;
    }

    set abschreibungNach(value) {
        this.#laufzeit = value;
    }
}


let geraeteListe = [];
geraeteListe.push(new Geraete("Laufband","Assault",1));
geraeteListe.push(new Geraete("Home-Trainer","Kettler",2));
geraeteListe.push(new Geraete("Cross-Trainer","Assault",3));
geraeteListe.push(new Geraete("Cross-Trainer","Assault",4));
geraeteListe.push(new Geraete("Cross-Trainer","Assault",5));
geraeteListe.push(new Geraete("Home-Trainer","Kettler",6));
geraeteListe.push(new Geraete("Home-Trainer","Kettler",7));

for(let i=0;i<geraeteListe.length;i++){
    geraeteListe[i].kaufdatum  = new Date('2024-01-10');
    geraeteListe[i].abschreibungNach = 10;
}


console.log("Inventar der Geräte:\n=========================")
for(let i=0;i<geraeteListe.length;i++){
    console.log(`Geräte: ${geraeteListe[i].bezeichnung},`+
        ` Number: ${geraeteListe[i].no}, Marke: ${geraeteListe[i].marke},`+
        ` Anschauffung/LZ: ${geraeteListe[i].kaufdatum}/${geraeteListe[i].abschreibungNach} Jahre`);
}
