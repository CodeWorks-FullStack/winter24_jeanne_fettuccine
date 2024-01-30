// SECTION weird stuff
console.log(2 + 2); // 4
console.log('2' + '2'); //22
console.log('2' + 2); // 22
console.log('cat' - 2); // NaN (not a number)


// !SECTION

// SECTION objects {}
const person = {
  name: 'Jeremy',
  age: 33,
  lovesCats: true
}

console.log(`
Hi my name is ${person.name},
 I am ${person.age} years young,
  and I ${person.lovesCats ? 'love' : 'hate'} cats.`);

// !SECTION

// SECTION arrays []
const numbers = [10, 21, 34]
const strings = ['jim', 'jordan', 'jeanne']
const bools = [true, false, true]
const badThings = [null, person, Infinity, [1, 2, 3, ['banana', 'orange']]]

console.log('numbers[1]', numbers[1]); // 21

// console.log(strings[0]);
// console.log(strings[1]);
// console.log(strings[2]);

for (let index = 0; index < strings.length; index++) {
  console.log(index);
  console.log(strings[index]);
}
// for (let index = 0; index < 10000; index++) {
//   console.log('jerms is doin something');
// }

// !SECTION

