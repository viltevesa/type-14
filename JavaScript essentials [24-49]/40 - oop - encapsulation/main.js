class Šventė {
  // # - draudžia naudoti kintamuosius už klasės ribų
  // # - privataus nario nustatymas
  #pavadinimas;
  #data;
  #aprašymas;

  constructor(pavadinimas, data) {
    this.nustatytiPavadinimą(pavadinimas);
    this.#data = data;
  }

  gautiPavadinimą() {
    return this.#pavadinimas;
  }

  nustatytiPavadinimą(naujasPavadinimas) {
    if (typeof naujasPavadinimas !== 'string') throw new Error('Šventės pavadinimas privalo būti simbolių darinys');
    if (naujasPavadinimas.length < 4) throw new Error(`Per trumpas šventės pavadinimas:\n\t"${naujasPavadinimas}"`);
    if (naujasPavadinimas.length > 32) throw new Error(`Per ilgas šventės pavadinimas:\n\t"${naujasPavadinimas}"`);

    this.#pavadinimas = naujasPavadinimas;
  }

  likoDienų() {
    const dabar = new Date();
    const likoMiliSekundžių = this.#data - dabar
    const dienos = likoMiliSekundžių / 1000 / 60 / 60 / 24;
    const suapvalintosDienos = dienos > 0 ? Math.floor(dienos) : Math.ceil(dienos);
    console.log(`iki ${this.#pavadinimas} liko ${suapvalintosDienos} dienų`);
  }
}

const manoMėgstamiausiosŠventės = [
  new Šventė('Šiandien', new Date(2022, 11, 13)),
  new Šventė('Kūčios', new Date(2022, 11, 24)),
  new Šventė('Kalėdos', new Date(2022, 11, 25)),
  new Šventė('Kalėdos II', new Date(2022, 11, 26)),
];

manoMėgstamiausiosŠventės[0].nustatytiPavadinimą('Eirimės vardadienis');
manoMėgstamiausiosŠventės.forEach(šventė => console.log(šventė.gautiPavadinimą()));