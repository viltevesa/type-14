function printRed(text) {
  console.log(`%c${text}`, 'color: red');
}

const numbers = [1, 2, 3, 4, 5, 777, 7, 8, 9, 10];

numbers.forEach(printRed);
