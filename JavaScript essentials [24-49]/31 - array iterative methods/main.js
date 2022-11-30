console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{
  function byPrice(drink, drinkOther) {
    return drink.price - drinkOther.price;
  }

  function sortDrinkByPrice(drinks) {
    return drinks.sort(byPrice);
  }

  const drinks = [
    { name: "lemonade", price: 50 },
    { name: "lime", price: 5 },
    { name: "fanta", price: 40 },
    { name: "cola", price: 20 },
    { name: "pepsi", price: 30 },
  ];

  const sortedDrinks = sortDrinkByPrice(drinks);
  console.table(sortedDrinks)
}
console.groupEnd();

console.group('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{
  function addName(obj, name, value) {
    obj[name] = value;
    return obj;
  }

  console.log({
    'addName({}, "Brutus", 300)': addName({}, "Brutus", 300),
    'addName({ piano: 500 }, "Brutus", 400)': addName({ piano: 500 }, "Brutus", 400),
    'addName({ piano: 500, stereo: 300 }, "Caligula", 440)': addName({ piano: 500, stereo: 300 }, "Caligula", 440),
  })
}
console.groupEnd();

console.group('3 - https://edabit.com/challenge/48EJWLhF224na8po3');
{
  const generationObject = {
    m: {
      '-3': 'great grandfather',
      '-2': 'grandfather',
      '-1': 'father',
      0: 'me!',
      1: 'son',
      2: 'grandson',
      3: 'great grandson',
    },
    f: {
      '-3': 'great grandmother',
      '-2': 'grandmother',
      '-1': 'mother',
      0: 'me!',
      1: 'daughter',
      2: 'granddaughter',
      3: 'great granddaughter',
    }
  };

  function generation(gen, sex) {
    return generationObject[sex][gen];
  }

  console.table({
    "generation(-3, 'm')": generation(-3, 'm'),
    "generation(-2, 'm')": generation(-2, 'm'),
    "generation(-1, 'm')": generation(-1, 'm'),
    "generation(0, 'm')": generation(0, 'm'),
    "generation(1, 'm')": generation(1, 'm'),
    "generation(2, 'm')": generation(2, 'm'),
    "generation(3, 'm')": generation(3, 'm'),
    "generation(-3, 'f')": generation(-3, 'f'),
    "generation(-2, 'f')": generation(-2, 'f'),
    "generation(-1, 'f')": generation(-1, 'f'),
    "generation(0, 'f')": generation(0, 'f'),
    "generation(1, 'f')": generation(1, 'f'),
    "generation(2, 'f')": generation(2, 'f'),
    "generation(3, 'f')": generation(3, 'f'),
  });
}
console.groupEnd();

console.group('4 - https://edabit.com/challenge/i6YqzHcSiPiEQKjeX');
{
  // Jeigu reikia kaupti/formuoti reikšmę su kiekvienu masyvo elementu, naudojama metodologija:
  // 1. padeklaruojamas pradinis elementas
  // 2. Pradedamas ciklas
  //  2.1 Kiekviena iteracija papildo/keičia padeklaruotą kintamajį [1.]
  // 3. atliekamas galutinis formavimas (nebūtinas)
  // 4. grąžinama/spausdinama reikšmė 

  function maximumScore(tiles) {
    // 1.
    let sum = 0;
    // 2.
    for (let i = 0; i < tiles.length; i++) {
      // 2.1
      sum += tiles[i].score;
    }

    // 4.
    return sum;
  }

  const tiles1 = [
    { tile: "N", score: 1 }, // 0
    { tile: "K", score: 5 }, // 1
    { tile: "Z", score: 10 }, // 2
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 } // 6
  ];

  const tiles2 = [
    { tile: "B", score: 2 },
    { tile: "V", score: 4 },
    { tile: "F", score: 4 },
    { tile: "U", score: 1 },
    { tile: "D", score: 2 },
    { tile: "O", score: 1 },
    { tile: "U", score: 1 }
  ];

  console.table(tiles1);
  console.log(`%cTotal score: ${maximumScore(tiles1)}`, 'font-size: 20px');
  console.table(tiles2);
  console.log(`%cTotal score: ${maximumScore(tiles2)}`, 'font-size: 20px');
}
console.groupEnd();

console.group('5 - https://edabit.com/challenge/8s2jy9hR2TAeQinKD');
{

}
console.groupEnd();

console.group('6 - https://edabit.com/challenge/pPNAs5PvB3WvnDwDM');
{

}
console.groupEnd();

console.group('7 - https://edabit.com/challenge/QXWM2oo7rQNiyDsip');
{

}
console.groupEnd();

console.group('8 - https://edabit.com/challenge/pLNavsePxJ87t9Nak');
{

}
console.groupEnd();
