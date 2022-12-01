function double(number) {
  return number * 2;
}

const numbers = [1, 2, 3, 4, 5, 777, 7, 8, 9, 10];

const doubleNumbers2 = numbers.map(double);
console.log(doubleNumbers2);
