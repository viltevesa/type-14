const fakeArray = {
  0: 5,
  1: 6,
  2: 7,
  3: 8,
  4: 9,
}

fakeArray.__proto__.printThis = function () {
  console.log(this);
}

fakeArray.printThis();
