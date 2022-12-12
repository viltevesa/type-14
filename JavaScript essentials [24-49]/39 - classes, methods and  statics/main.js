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
const car2 = new Automobilis('Opel', 'Astra', 200);
const car3 = new Automobilis('Opel', 'Astra', 200);

console.log({ car1, car2, car3 });

console.log(car1.marke);
console.log(car2.marke);
console.log(car3.marke);

console.log(car1.modelis)
console.log(car2.modelis)
console.log(car3.modelis)

console.log(car1.kaina);
console.log(car2.kaina);
console.log(car3.kaina);

// 5. Padidinkite Automobilis objektų kainas šimtu.

car1.price += 100;
car2.price += 100;
car3.price += 100;

// 6. Po padidinimo, vėl atsispausdinkite objektus ir pažiūrėkite pakitusias Automobilis objektų savybes.

console.log({ car1, car2, car3 });

car1.užkurtiVariklį();
car1.spaustPerTapkę(50);
console.log(car1.greitis);
car1.spaustPerTapkę(20);
car1.mažintiGreitį(15);


console.log(car1.greitis);

