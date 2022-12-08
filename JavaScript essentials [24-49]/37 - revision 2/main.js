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
