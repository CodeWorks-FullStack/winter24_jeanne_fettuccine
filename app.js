console.groupCollapsed()

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


// SECTION array methods
const cats = [
  {
    name: 'Gopher',
    age: 3,
    likesCheese: true,
    favoriteToys: null
  },
  {
    name: 'Georgie',
    age: 8,
    likesCheese: true,
    favoriteToys: ['boxes', 'house plants']
  },
  {
    name: 'Falcon',
    age: 3,
    likesCheese: false,
    favoriteToys: ['laser pointer']
  },
  {
    name: 'Iron Man',
    age: 3,
    likesCheese: true,
    favoriteToys: ['laser pointer', 'string', 'mouse']
  },
]

for (let i = 0; i < cats.length; i++) {
  const cat = cats[i]
  console.log(cat.name);
}

function sayHello() {
  console.log('Hello!');
}
cats.forEach(sayHello)
// cats.forEach((cat) => { console.log(cat.name) })
cats.forEach(cat => console.log(cat.name))

// const foundCat = cats.find(cat => cat.likesCheese == true) // NOTE will always pull out the first cat that likes cheese
const foundCat = cats.find(cat => cat.name == 'Georgie') // NOTE pulls out the first cat whose name is georgie
console.log('found a cat', foundCat);

const filteredCats = cats.filter(cat => cat.likesCheese == false)
console.log('filtered the cats', filteredCats);


// !SECTION
console.groupEnd()

// ANCHOR application code starts here

// NOTE global variable
const menuItems = [
  {
    name: 'shrimp and steak scampi',
    price: 15,
    cartQuantity: 0
  },
  {
    name: 'linguine with clams',
    price: 23,
    cartQuantity: 0
  },
  {
    name: 'the jeanne fettuccine',
    price: 18,
    cartQuantity: 0
  },
]



function addShrimpAndSteakScampiToCart() {
  // pull correct object out of array
  const shrimpAndSteakScampi = menuItems.find(menuItem => menuItem.name == 'shrimp and steak scampi')
  console.log('got the scampi', shrimpAndSteakScampi);
  // increase quantity
  shrimpAndSteakScampi.cartQuantity++
  console.log('increasing quantity', shrimpAndSteakScampi.cartQuantity);
  calculateCartTotal()
}

function addLinguineWithClamsToCart() {
  // pull correct object out of array
  const linguineWithClams = menuItems.find(menuItem => menuItem.name == 'linguine with clams')
  console.log(linguineWithClams);
  // increase quantity
  linguineWithClams.cartQuantity++
  calculateCartTotal()
}

function addMenuItemToCart(menuItemName) {
  console.log('menu item name', menuItemName);
  const foundMenuItem = menuItems.find(menuItem => menuItem.name == menuItemName)
  console.log('found a menu item', foundMenuItem);
  foundMenuItem.cartQuantity++
  calculateCartTotal()
}

function calculateCartTotal() {
  let total = 0

  menuItems.forEach(menuItem => {
    // console.log(menuItem.price * menuItem.cartQuantity)
    total += menuItem.price * menuItem.cartQuantity
  })

  console.log('total:', total);

  const cartTotalElement = document.getElementById('cartTotal')
  cartTotalElement.innerText = total.toString()
}

function drawCartList() {
  menuItems.forEach(menuItem => console.log(menuItem.name))
}

calculateCartTotal()