class Šventė {
  // # - draudžia naudoti kintamuosius už klasės ribų
  // # - privataus nario nustatymas
  #pavadinimas;
  #data;

  constructor(pavadinimas, data) {
    this.nustatytiPavadinimą(pavadinimas);
    this.#data = data;
  }

  // getTitle
  gautiPavadinimą() {
    return this.#pavadinimas;
  }

  // setTitle
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
/*
  Inkapsuliacija - tai objekto (arba klasės) savybių (arba metodų) prieinamumo valdymas;
  public - savybės ar metodai yra pasiekiami, ir gali būti keičiami bei naudojami iš bet kur
  private (#) - savybės ar metodai yra pasiekiami ir gali būti keičiami bei naudojami tik klasės metoduose, bei get'eriuose ir set'eriuose.

  Get'eteris (getter) - tai metodas kuris iškviečiamas tarsi savybė ir yra naudojamas reikšmei gauti. 
    // Get'erio metu yra pasirūpinama, jog nebūtų atiduota tiesioginė reikšmės nuoroda.

  Set'eteris (setter) - tai metodas kuris iškviečiamas tarsi savybė ir yra naudojamas reikšmei nustatyti. 
    Set'erio funkcijos metu yra atliekami naujos reikšmės patikrinimai
*/

console.group('1. Inkapsuliuokite Šventė.data reikšmę, jog ji visada būtų data, esanti vėliau nei dabar');
{
  // Nepamirškite patikrinti Šventės.data reikšmės priskyrimo ir Šventė.constructor vykdymo metu.

}
console.groupEnd();