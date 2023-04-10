'use strict';

// Data needed for a later exercise
/* const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30'; */

// Data needed for first part of the section
const weekDays1 = [
  `Monday`,
  `Tuesday`,
  `Wednesday`,
  `Thursday`,
  `Friday`,
  `Saturday`,
  `Sunday`,
];

const openingHours1 = {
  [weekDays1[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays1[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays1[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = `20:00`, address }) {
    console.log(
      `your order was received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },

  // enhanced object litterals
  openingHours1,
};

// destructuring an array
const arr = [2, 3, 4];

const a = arr[0];
const b = arr[1];
const c = [2];

// instead of doing it like before, we can destructure it like this:

const [x, y, z] = arr;
console.log(x, y, z);

// destructuring in a object

const [first, second] = restaurant.categories;
console.log(first, second);

// what if we wanted the first restaurant and the third instead of the first and second
const [First, , third] = restaurant.categories;
console.log(First, third);

// if we want to switch the italian by pizzaria, so the order of the aray we can do:

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
// to change them we just need to invert the order with the destructure
[main, secondary] = [secondary, main];
console.log(main, secondary);

//we can do the same with a method that is inside a class
console.log(restaurant.order(2, 0));

// receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 1);
console.log(starter, mainCourse);

// doing destructuring in array inside array
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j);

// destructuring inside destructuring
const [d, , [e, f]] = nested;
console.log(d, e, f);

// default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

// destructuring objects

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// changing the property names of an object and give them new variable names

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// mutating objects
let t = 111;
let s = 222;

const obj = { t: 23, s: 7 };

({ t, s } = obj);
console.log(t, s);

// nested objects
/*const {
  friday: { open: o, close: n },
} = openingHours;
console.log(open, close); */

restaurant.orderDelivery({
  time: `22:30`,
  address: `Via del sol, 21`,
  mainIndex: 2,
  sarterIndex: 2,
});

restaurant.orderDelivery({
  time: `22:30`,
  address: `Via del sol, 21`,
});

// Spread operator
console.log(`Spread Operator`);
const arr1 = [7, 8, 9];

const newArr = [1, 2, ...arr1];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, `Lasanha`];
console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

//join wo arrays or more
const joinMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(joinMenu);

// using spread in a string
const ric = `Ricardo`;
const letters = [...ric, ``, `s.`];
console.log(letters);

// spread operator with functions
/*
const ingredients = [
  prompt(`let's make pasta! Ingredient 1?`),
  prompt(`let's make pasta! Ingredient 2?`),
  prompt(`let's make pasta! Ingredient 3?`),
];
console.log(ingredients);
restaurant.orderPasta(...ingredients);*/

// spread operator in objects
const newRestaurantObject = {
  ...restaurant,
  founder: `Daniel`,
  creationDate: 1998,
};
console.log(newRestaurantObject);

//Copying an object with Spread operator.
const restaurantCopy = { ...restaurant };
restaurantCopy.name = `ristorante Roma`;
console.log(restaurantCopy);

// rest pattern - does the opposite of the spread operator
// the REST operator is always written on the left side of the operator
// the rest pattern is used withdestructuring
const [w, k, ...others] = [1, 2, 6, 7, 9, 8];
console.log(w, k, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//rest pattern in objects
/* const { saturday, ...weekDays } = restaurant.openingHours;
console.log(weekDays);*/

// rest pattern in functions with rest argument

const add1 = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add1(2, 3);
add1(5, 3, 7, 2);
add1(2, 3, 4, 5, 6, 7);

const h = [7, 25, 23];
add1(...h);

restaurant.orderPizza(`mushrooms`, `onions`, `pineapple`);

// short circuiting && and ||

console.log(0 || `Jonas`);
console.log(`` || `Jonas`);
console.log(true || 0);
console.log(undefined || null);

const guests1 = restaurant.numGuests || 10;
console.log(guests1);
restaurant.numGuests = 23;
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log(`_____AND______`);

console.log(0 && `Jonas`);
console.log(`` && `Jonas`);
console.log(true && 0);
console.log(undefined && null);
console.log(7 && `ricardo`);

if (restaurant.orderPizza) {
  restaurant.orderPizza(`mushrooms`, `Spinach`);
}

restaurant.orderPizza && restaurant.orderPizza(`mushrooms`, `Spinach`);

//nullish coalescing

const guests3 = restaurant.numGuests ?? 10;
console.log(guests2);

const rest1 = {
  name: `Capri1`,
  numGuests: 20,
};

const rest2 = {
  name: `Poeta`,
  owner: `Giovanni`,
  numGuests: 0,
};

// OR assignment operator

rest2.numGuests ||= 10;
rest2.numGuests ||= 10;
//rest2.numGuests = rest2.numGuests || 10;
//rest1.numGuests = rest1.numGuests || 10;
console.log(rest1);
console.log(rest2);

// Nullish coalescing operator;
rest2.numGuests ??= 10;
rest2.numGuests ??= 10;
console.log(rest1);
console.log(rest2);

// AND assignment operator
// rest2.owner = rest2.owner && `anonymous`;
// rest1.owner = rest1.owner && `anonymous`;
rest2.owner &&= `anonymous`;
rest1.owner &&= `anonymous`;
console.log(rest1);
console.log(rest2);

// Challenge 1
const game = {
  team1: `Bayern Munich`,
  team2: `Borussia Dortmund`,
  players: [
    [
      `Neuer`,
      `Pavard`,
      `Martinez`,
      `Alaba`,
      `Davies`,
      `Kimmich`,
      `Goretzka`,
      `Coman`,
      `Muller`,
      `Gnarby`,
      `Lewandowski`,
    ],
    [
      `Burki`,
      `Schulz`,
      `Hummels`,
      `Akanji`,
      `Hakimi`,
      `Weigl`,
      `Witsel`,
      `Harzard`,
      `Brand`,
      `Sancho`,
      `Gotze`,
    ],
  ],
  score: `4:0`,
  scored: [`Lewandowski`, `Gnarby`, `Lewandowski`, `Hummels`],
  date: `Nov 9th 2017`,
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// 1
const [players1, players2] = game.players;
console.log(players1, players2);
// 2
const [gk, ...fieldPlayers] = players1;

// 3 all players
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4.
const players1Final = [...players1, `Coutinho`, `Tiago`, `Perisic`];
//5.

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6.
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

printGoals(...game.scored);

// 7.
team1 < team2 && console.log(`Team1 is more likely to win`);
team1 > team2 && console.log(`Team1 is more likely to win`);

// for-of looping

const menu3 = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu3) console.log(item);
for (const [i, el] of menu3.entries()) {
  console.log(`${i + 1}: ${el}`);
}

if (restaurant.openingHours1 && restaurant.openingHours1.Friday)
  console.log(restaurant.openingHours1.Friday.open);

//WITH Optional Chaining
console.log(restaurant.openingHours1.Monday?.open);

const days = [
  `Monday`,
  `Tuesday`,
  `Wednesday`,
  `Thursday`,
  `Friday`,
  `Saturday`,
  `Sunday`,
];

for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours1[day]?.open ?? `closed`;
  console.log(`On ${day}, we open at ${open}`);
}

// Optional chaiing on methods
console.log(restaurant.order?.(0, 1) ?? `Method does not exist`);
console.log(restaurant.orderRisotto?.(0, 1) ?? `Method does not exist`);

// Optional chaining in arrays
const users4 = [
  {
    name: `Jonas`,
    email: `helloworld.jonas@jonas.com`,
  },
];

console.log(users4[0]?.name ?? `User4 array is empty`);

// Property NAMES
const properties = Object.keys(openingHours1);
console.log(properties);

let openStr = `We are opened ${properties.length} days a week: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours1);
console.log(values);

//Entire object
const entries = Object.entries(openingHours1);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

//coding challenge 2

// 1.
/*for (const goal of game.scored) {
  console.log(`Goal 1: ${goal}`);
} */

for (const [i, el] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${el}`);
}

// 2.
const odds = Object.values(game.odds);
console.log(odds);

let sum = 0;
let avg = 0;
for (const z of odds) {
  sum += z;
  avg = sum / odds.length;
}
console.log(sum);
console.log(avg);

// 3.
/*console.log(`Odd of victory of ${game.team1}: ${odds[0]}`);
console.log(`Odd of victory of draw: ${odds[1]}`);
console.log(`Odd of victory of ${game.team2}: ${odds[2]}`);*/

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === `x` ? `draw` : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

console.log(`${game.team1}`);

// SET variable removes duplicates from an array and they are also iterables.
const orderSet = new Set([`Pasta`, `Pizza`, `Risotto`, `Pizza`, `Pasta`]);
console.log(orderSet);
console.log(new Set(`Jonas`));

console.log(orderSet.size);
console.log(orderSet.has(`Pizza`));
console.log(orderSet.has(`bread`));

orderSet.add(`Garlic bread`);
orderSet.add(`Garlic bread`);
console.log(orderSet);
orderSet.delete(`Garlic bread`);
console.log(orderSet);

for (const order of orderSet) console.log(order);

//Example
const staff = [`Waiter`, `Chef`, `Waiter`, `Manager`, `Chef`, `Waiter`];
const newStaff = [...new Set(staff)];
console.log(newStaff);
console.log(newStaff.size);

// maps
const rest = new Map();
rest.set(`name`, `Classico Italiano`);
rest.set(1, `Firenze, Italy`);
rest.set(2, `Lisbon, Portugal`);
console.log(rest);
rest
  .set(`categories`, ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set(`open`, 11)
  .set(`closed`, 23)
  .set(true, `We are open`)
  .set(false, `We are closed`);

console.log(rest.get(`name`));
console.log(rest.get(true));

const time = 21;
console.log(rest.get(time > rest.get(`open`) && time < rest.get(`closed`)));

console.log(rest.has(`categories`));
rest.delete(2);
console.log(rest);
console.log(rest.size);

const question = new Map([
  [`question`, `What is the best programming language?`],
  [1, `C`],
  [2, `Java`],
  [3, `Javascript`],
  [`correct`, 3],
  [true, `correct`],
  [false, `try again`],
]);
console.log(question);

// convert object to MAP
const hoursMap = new Map(Object.entries(openingHours1));
console.log(hoursMap);

//Iteration in MAP
console.log(question.get(`question`));

for (const [key, value] of question) {
  if (typeof key === `number`) console.log(`Answer ${key}: ${value}`);
}
//const answerUser = Number(prompt(`Your answer`));
const answerUser = 3;
console.log(answerUser);

console.log(question.get(question.get(`correct`) === answerUser));
question.get(question.get(`correct`) === answerUser);

// convert MAP to array
console.log([...question]);
console.log(question.entries());
console.log(question.keys());
console.log(question.values());

// coding challenge 3
const gameEvents = new Map([
  [17, `Goal`],
  [36, `Substitution`],
  [47, `Goal`],
  [61, `Substitution`],
  [64, `Yellow Card`],
  [69, `Red Card`],
  [70, `Substitution`],
  [72, `Substitution`],
  [76, `Goal`],
  [80, `Substitution`],
  [92, `Yellow Card`],
]);

// 1.
const events = new Set(gameEvents.values());
console.log(events);

// 2.
gameEvents.delete(64);
//console.log(gameEvents);

// 3.
// lets get the last key of the MAP to get the 92 minute
// get the keys of the MAP as an array using SPREAD and use .POP to get the last element
const gameTime = [...gameEvents.keys()].pop();
console.log(`An event happened, on 
average, every ${gameTime / gameEvents.size} minutes`);
// console.log(gameTime);

// 4.
for (const [key, value] of gameEvents) {
  key < 45
    ? console.log(`First Half ${key}: ${value}`)
    : console.log(`Second Half ${key}: ${value}`);
}

// String methods
const airline = `TAP air Portugal`;
const plane = `A320`;

console.log(plane[0]);
console.log(plane.length);

console.log(airline.indexOf(`r`));
console.log(airline.lastIndexOf(`r`));
console.log(airline.indexOf(`Portugal`));

console.log(plane.slice(1));
console.log(airline.slice(4, 7));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  s === `B` || s === `E`
    ? console.log(`You got the middle seat`)
    : console.log(`You are on the window seat`);
};
checkMiddleSeat(`11B`);
checkMiddleSeat(`23C`);
checkMiddleSeat(`3E`);

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// fixing capitalization in passenger names
const passenger = `fRanCiS`; // Francis
const passLower = passenger.toLowerCase();
const proper = passLower[0].toUpperCase() + passLower.slice(1);
console.log(proper);

// Comparing emails
const passenger1 = `hello@jonas.io`;
const logInEmail = `   Hello@JONAS.Io \n`;
// const lowerEmail = logInEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const normalizedEmail = logInEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(passenger1 === normalizedEmail);

// replacing strings
const priceGB = `238,97$`;
const priceUS = priceGB.replace(`,`, `.`);
console.log(priceUS);

const announcement = `All passenger come to boarding door 23! Boarding door 23! `;
console.log(announcement.replaceAll(`door`, `gate`));
// using regex
console.log(announcement.replace(`/door/g`, `gate`));

// Booleans
const plane1 = `A320neo`;
console.log(plane1.includes(`A320`));

if (plane1.startsWith(`A`) && plane1.endsWith(`neo`)) {
  console.log(`Part of the NEW AIRBUS Family`);
}

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (items.includes(`knife`) || baggage.includes(`gun`)) {
    console.log(`You are not allowed on board`);
  } else {
    console.log(`Welcome on board`);
  }
};

checkBaggage(`I have a laptop, some food, and a pocket knife`);
checkBaggage(`I have a camera and socks`);
checkBaggage(`I have a Handgun for protection.`);

// split & join
console.log(`a+ very+nice+string`.split(`+`));
console.log(`Ricardo Mendes`.split(` `));

const [firstName, lastName] = `Ricardo Mendes`.split(` `);
console.log(firstName);

const newName = [`Mr`, firstName, lastName.toUpperCase()].join(` `);
console.log(newName);
const namesUpper = [];

const capitalizeName = function (name) {
  const names = name.split(` `);
  for (const n of names) {
    //namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(` `));
};
capitalizeName(`Jessica anne smith Davis`);
capitalizeName(`Ricardo mendes`);

// Padding a string
const message = `Go to gate 23`;
console.log(message.padStart(25, `+`));
console.log(message.padEnd(30, `+`));

const maskCreditCard = function (number) {
  const str = number + ``;
  console.log(str);
  const last = str.slice(-4);
  return last.padStart(str.length, `*`);
};
console.log(maskCreditCard(123456789));
console.log(maskCreditCard(1234567895463736));

// Repeat method
const weatherMessage = `Bad weather... All departures are delayed... `;
console.log(weatherMessage.repeat(5));

// coding challenge 4
document.body.append(document.createElement(`textarea`));
document.body.append(document.createElement(`button`));

document.querySelector(`button`).addEventListener(`click`, function () {
  const text = document.querySelector(`textarea`).value;
  const rows = text.split(`\n`);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split(`_`);
    // console.log(row, first, second);

    const output = `${first} ${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20, ` `)}${`*`.repeat(i + 1)}`);
  }
});

// test data for coding challenge 4
/*underscore_case 
 first_name 
Some_Variable  
  calculate_AGE 
delayed_departure */

// String methods practise

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split(`+`)) {
  const [type, from, to, time] = flight.split(`;`);
  const output1 = `${type.startsWith(`_Delayed`) ? `*` : ``}${type.replaceAll(
    `_`,
    ` `
  )} ${getCode(from)} ${getCode(to)} (${time.replace(`:`, `h`)})`.padStart(50);
  console.log(output1);
}
