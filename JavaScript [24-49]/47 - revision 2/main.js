const films = [{
  title: 'The Matrix',
  roles: [
    { title: 'Neo', actor: { name: 'Keanu', surname: 'reeves' } },
    { title: 'Morpheus', actor: { name: 'Laurence', surname: 'Fishburne' } },
    { title: 'Trinity', actor: { name: 'Carrie-Anne', surname: 'Moss' } },
  ],
  ratings: [10, 8, 9, 9, 9, 7, 10, 10, 10],
  year: 1999,
}, {
  title: 'The Matrix Reloaded',
  roles: [
    { title: 'Neo', actor: { name: 'Keanu', surname: 'Reeves' } },
    { title: 'Morpheus', actor: { name: 'Laurence', surname: 'Fishburne' } },
    { title: 'Trinity', actor: { name: 'Carrie-Anne', surname: 'Moss' } },
  ],
  ratings: [7, 7, 8, 9, 10, 10],
  year: 2003,
}, {
  title: 'The Matrix Revolutions',
  roles: [
    { title: 'Neo', actor: { name: 'keanu', surname: 'Reeves' } },
    { title: 'Morpheus', actor: { name: 'Laurence', surname: 'Fishburne' } },
    { title: 'Trinity', actor: { name: 'Carrie-Anne', surname: 'Moss' } },
  ],
  ratings: [7, 8, 9, 10, 10, 10, 7, 8],
  year: 2003,
}, {
  title: 'The Shawshank Redemption',
  roles: [
    { title: 'Andy Dufresne', actor: { name: 'Tim', surname: 'Robbins' } },
    { title: "Ellis Boyd 'Red' Redding", actor: { name: 'Morgan', surname: 'Freeman' } },
  ],
  ratings: [10, 10, 10, 10, 10, 8, 10, 10],
  year: 1994,
}, {
  title: 'The Godfather',
  roles: [
    { title: 'Don Vito Corleone', actor: { name: 'Marlon', surname: 'Brando' } },
    { title: 'Michael Corleone', actor: { name: 'Al', surname: 'Pacino' } },
    { title: 'Tom Hagen', actor: { name: 'Robert', surname: 'Duvall' } },
  ],
  ratings: [10, 10, 9, 10, 8, 10, 10],
  year: 1972,
}, {
  title: 'The Dark Knight',
  roles: [
    { title: 'Joker', actor: { name: 'Heath', surname: 'Ledger' } },
    { title: 'Bruce Wayne', actor: { name: 'Christian', surname: 'Bale' } },
  ],
  ratings: [10, 9, 9, 9, 10, 8, 10, 10],
  year: 2008,
}];

console.group('Array.prototype.reduce');
{
  console.group('1. Surasti Vieno filmo, įvertinimų vidurkį');
  {

  }
  console.groupEnd();
}
console.groupEnd();
