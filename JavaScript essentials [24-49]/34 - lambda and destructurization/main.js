let name = 'Susan';
let surname = 'Bazanova';
let age = 39;

// Struktūrizavimas - masyvo arba objekto kūrimas
const array = [name, surname, age];
const obj = { name, surname, age };

console.groupCollapsed('Masyvo destrūkturizavimas naudojant ...');
{
  const numbers = [7, 5, -9, 18, 4, 19, 5, 6, 7, -11, 9, 27];
  console.group('Min ir max suradinimas naudojant masyvą');
  {
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);
    console.log({ max, min });
  }
  console.groupEnd();

  console.group('Masyvo kopija');
  {
    const numbersCopy = [...numbers];
    numbersCopy[0] = 'barabum barabam';

    console.log('numbers:', numbers);
    console.log('numbersCopy:', numbersCopy);
  }
  console.groupEnd();
}
console.groupEnd();

console.groupCollapsed('Objekto destrūkturizavimas naudojant ...');
{
  const user = {
    name: 'Gerbanas',
    surname: 'Lokauzas',
    role: 'Lavonas'
  };

  console.group('Papildyti objektą');
  {
    // const userLithuanian = {
    //   name: user.name,
    //   surname: user.surname,
    //   role: user.role,
    //   age: 17,
    //   country: 'Lithuania'
    // }

    // Destruktūrizuoti objektą galite tik kurdami naują objektą 
    const userLithuanian = {
      ...user,
      age: 17,
      country: 'Lithuania'
    }
    console.table(userLithuanian);
  }
  console.groupEnd();

  console.group('Objekto kopija');
  {
    // const userCopy = {
    //   name: user.name,
    //   surname: user.surname,
    //   role: user.role,
    // }

    const userCopy = { ...user };

    userCopy.name = 'Parabym parabam';
    console.log('userCopy:\n', userCopy);
    console.log('user:\n', user);
  }
  console.groupEnd();
}
console.groupEnd();

console.groupCollapsed('Objekto destrūkturizavimas kuriant kintamuosius');
{
  const user1 = {
    name: 'Gerbanas',
    surname: 'Lokauzas',
    role: 'Lavonas',
    a: 1,
    b: 7,
    address: {
      city: 'Pabrėžai',
      street: 'Morgo g.',
      nr: 13
    }
  };
  const user2 = {
    name: 'Čiubryla',
    surname: 'Banzai',
    role: 'Prižiūrėtoja',
    a: 1,
    b: 7,
    address: {
      city: 'Pabrėžai',
      street: 'Siurprizų pr.',
      nr: 7
    }
  };

  console.group('Įprastinis');
  {
    // const name = user1.name;
    // const surname = user1.surname;

    const { name, surname } = user1;
    console.log(name, surname);
  }
  console.groupEnd();

  console.group('Su pervadinimu');
  {
    // const name1 = user1.name;
    // const surname1 = user1.surname;
    // const name2 = user2.name;
    // const surname2 = user2.surname;

    const { name: name1, surname: surname1 } = user1;
    const { name: name2, surname: surname2 } = user2;

    console.log(name1, surname1);
    console.log(name2, surname2);
  }
  console.groupEnd();

  console.group('Su papildomu gyliu');
  {
    const { address: { city, street, nr } } = user2;
    console.log(`${street} ${nr}, ${city}.`);
  }
  console.groupEnd();

  console.group('naudojant funkciją');
  {
    const users = [user1, user2];
    // console.log(`${street} ${nr}, ${city}.`);

    // users.forEach((person) => console.log(`${person.name} ${person.surname}`));
    users.forEach(({ name, surname }) => console.log(`${name} ${surname}`));

    // const printAddress2 = (person) => console.log(`${person.address.street} ${person.address.nr}, ${person.address.city}.`)
    // users.forEach(printAddress2);

    const printAddress = ({ address: { street, nr, city } }) => console.log(`${street} ${nr}, ${city}.`);
    users.forEach(printAddress);

    // const refactoredUsers = users.map((user) => ({
    //   fullname: user.name + ' ' + user.surname,
    //   role: user.role,
    //   address: user.address,
    // }));
    // console.table(refactoredUsers);

    // Naudojant pirmajį parametrą sukurti kintamuosius <name> ir <surname>, o likusias savybes
    // patalpinti į objektą  <restUserProps>
    const refactoredUsers = users.map(({ name, surname, ...restUserProps }) => ({
      ...restUserProps,
      fullname: name + ' ' + surname,
    }));
    console.table(refactoredUsers);
  }
  console.groupEnd();
}
console.groupEnd();
