let numbers = [];
for (let i = 1; i <= 20; i++) {
  numbers.push(i);
}

for (let i = numbers.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
}

console.log("Random order:", numbers);

let ascending = [...numbers].sort((a, b) => a - b);
console.log("Ascending order:", ascending);
