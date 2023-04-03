function greet(name) {
  return `Hi ${name}!`;
}

console.log(greet("Sofia"));

let first = ["Your", "This", "Next"];

let second = ["day", "week", "month"];
let third = ["will lead to", "will get you", "will bring"];

let fourth = [
  "syntony & good communication",
  "armony & balance",
  "good energies",
];

let randomFirstIndex = Math.floor(Math.random() * first.length);
let randomFirst = first[randomFirstIndex];
console.log(randomFirst);

let randomSecondIndex = Math.floor(Math.random() * second.length);
let randomSecond = second[randomSecondIndex];
console.log(randomSecond);

let randomThirdIndex = Math.floor(Math.random() * third.length);
let randomThird = third[randomThirdIndex];
console.log(randomThird);

let randomFourthIndex = Math.floor(Math.random() * fourth.length);
let randomFourth = fourth[randomFourthIndex];
console.log(randomFourth);

function dailyMessage(first, second, third, fourth) {
  let horoscope =
    randomFirst + " " + randomSecond + " " + randomThird + " " + randomFourth;
  return horoscope;
}

console.log(dailyMessage());
