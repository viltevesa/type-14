const numbers = [1, 2, 3, 4, 5, 6];
//               0  1  2  3  4  5  | numbers.length -> 6

/*
  pradinis kintamasis
  // salyga
  zingsnis
  // vykdymo blokas
*/

for (let i = numbers.length - 1; i >= 0; i -= 2) {
  console.log({ i, el: numbers[i] });
}

console.log('ciklas baigesi')
