const isObjectLiteral = (val) => Object.getPrototypeOf(val) === Object.prototype

class House {
  address;
  city;
  #owners;

  constructor(address, city, owners) {
    this.address = address;
    this.city = city;
    this.#owners = owners;
  }

  setOwners(newOwners) {
    if (!Array.isArray(newOwners)) {
      console.error('Error in House.setOwners. newOwners must be an Array.')
      return;
    }
    if (newOwners.length === 0) {
      console.error('Error in House.setOwners. newOwners can\'t be empty.')
      return;
    }
    if (!newOwners.every(isObjectLiteral)) {
      console.error('Error in House.setOwners. Every owner must be object literal.')
      return;
    }
    if (!newOwners.every((owner) => typeof owner.name === 'string' && owner.name.length > 1)) {
      console.error('Error in House.setOwners. Every owner must have a name, which is longer than 1 letter.')
      return;
    }

    console.log(`%cnewOwners are accepted. Welcome home:\n\t${newOwners.map(x => x.name).join('\n\t')}`, 'color: green');
    this.#owners = newOwners;
  }
  getOwners() {
    return this.#owners;
  }
}

const house = new House('Kimano g. 7', 'Kaunas', [{ name: 'Blakas Kojinskas' }]);
const houses = [
  new House('Kimano g. 7', 'Kaunas', [{ name: 'Blakas Kojinskas' }]),
  new House('Aliejų g. 121', 'Kaunas', [{ name: 'Sensas Jautimantas' }, { name: 'Rekė Jautimantė' }]),
  new House('Sustenų g. 7', 'Vilnius', [{ name: 'Groja Blanienė' }, { name: 'Fartas Blanys' }]),
  new House('Varkatkų g. 7', 'Klaipėda', [{ name: 'Faryja Mirgaitė' }]),
];

console.group('1. HouseInstance.owners savybės inkapsuliacija');
{
  console.log(house.getOwners());
  house.setOwners(8);
  house.setOwners([]);
  house.setOwners([7, 8]);
  house.setOwners([{}, {}, {}]);
  house.setOwners([{ name: 7 }, { name: 7 }, { name: 7 }]);
  house.setOwners([{ name: 'a' }, { name: 'aa' }, { name: 'lll' }]);
  house.setOwners([{ name: 'Ben Waps' }, { name: 'Jeronim Smith' }, { name: 'Kegl Straisen' }]);
}
console.groupEnd();

console.group('2. Perrašykite HouseInstance.address savybės inkapsuliaciją naudojant naują sintaksę');
{

}
console.groupEnd();

console.group('3. Perrašykite HouseInstance.city savybės inkapsuliaciją naudojant naują sintaksę');
{

}
console.groupEnd();
