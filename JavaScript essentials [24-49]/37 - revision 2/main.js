const numberArrayDemo = {
  0: 5,
  1: 6,
  2: 7,
  3: 8,
  4: 9,
  5: 10,
  length: 6,
};
/*
  Array.prototype.map iteracinis metodas yra skirtas kurti naują masyvą, iš iteruojamo masyvo elementų.
  Iteruodamas per kiekvieną masyvo elementą, jis kviečia argumentu perduotą funkciją su 3 argumentais:
    1. einamasis elementas
    2. einamojo elemento indeksas
    3. iteruojamas masyvas
  Tos funkcijos grąžintas rezultatas dedamas į naują masyvą. Praiteravus per visus iteruojamo masyvo 
  elementus, suformuotas masyvas grąžinamas į iškvietimo vietą.
*/
numberArrayDemo.__proto__.map = function ( callback ) {
  const newArray = [];
  for (let i = 0; i < this .length; i++) {

    const callbackResult = callback( this[i],  i,  this );
    newArray .push( callbackResult );
  }

  return newArray;
}

const doubledArray = numberArrayDemo.map( ( x ) => x * 2 );
console.log(doubledArray)





















/*
  forEach yra 'Array' iteracinis metodas. Jo tikslas, tiesiog įvykdytį argumentu perduotą funkciją,
  su kiekvienu masyvo elementu. Kviečiant argumentu perduotą funkciją, tai funkcijai yra siunčiami 
  3 argumentai, tokia tvarka:
    1. einamasis masyvo elementas,
    2. einamojo masyvo elemento indeksas
    3. masyvas per kurį yra iteruojama
*/

numberArrayDemo.__proto__.forEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
}

const printElement = (number) => console.log(number);

numberArrayDemo.forEach(printElement);


