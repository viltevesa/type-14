class Automobilis {
  marke;
  modelis;
  kaina;
  greitis;
  veikiaVariklis;

  constructor(marke, modelis, kaina) {
    this.marke = marke;
    this.modelis = modelis;
    this.kaina = kaina;
    this.greitis = 0;
    this.veikiaVariklis = false;
  }

  spaustPerTapkę(prieaugis) {
    if (this.veikiaVariklis) {
      this.greitis += prieaugis;
    } else {
      console.error('Negalima didinti greičio, jei užgesintas neįjungtas variklis')
    }
  }

  mažintiGreitį(mažėjimas) {
    this.greitis = this.greitis - mažėjimas;
  }

  užkurtiVariklį() {
    this.veikiaVariklis = true;
  }

  užgesintiVariklį() {
    this.veikiaVariklis = false;
  }
}

const car1 = new Automobilis('Opel', 'Astra', 200);
console.dir(Automobilis);
console.dir(car1)

console.log(Automobilis.prototype);
console.log(car1.__proto__);

console.log(car1.__proto__ === Automobilis.prototype);