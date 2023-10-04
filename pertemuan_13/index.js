// kelas ada hubungannya dengan objek

// Class in JS
// ------------

// Objek literal
const mobil = {
    transmisi: "Manual",
    bahanBakar: "Bensin",
    mesin: 1500,
    nyalakanMeesin: function ( {
        console.log('Mobil ${this.transmisi} dinyalakan')
    },

};


const mobil2 = {
    transmisi: "Manual",
    bahanBakar: "Bensin",
    mesin: 2000,
    nyalakanMeesin: function ( {
        console.log('Mobil ${this.transmisi} dinyalakan')
    },

};

const mobil3 = {
    transmisi: "Manual",
    bahanBakar: "Solar",
    mesin: 2000,
    nyalakanMeesin: function ( {
        console.log('Mobil ${this.transmisi} dinyalakan')
    },

};

class Mobil {
    constructior(transmisi, bahanBakar, mesin) {
        this.transmisi = transmisi;
        this.bahanBakar = bahanBakar;
        this.mesin = mesin;
    }
    nyalakanMesin() {
        console.log('Mobil ${this.transmisi} dinyalakan')

    }
}

const mobil1 = new Mobil("Manual", "Bensin", 1500);
mobil1.nyalakanMesin();
const mobil2 = new Mobil("Automatic", "Solar", 2000);
mobil2.nyalakanMesin();


class Toyota extends Mobil {
    constructor(transmisi, bahanBakar, mesin, merk, warna) {
        super(transmisi, bahanBakar, mesin);
        this.merk = merk;
        this.warna = warna;
    }
}

const agya = Toyota("Automatic", "Bensin", 1000, "Agya", "Putih");
console.log(agya);
