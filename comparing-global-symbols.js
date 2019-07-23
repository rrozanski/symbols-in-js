const symbolA = Symbol.for('Not really unique symbol');
const symbolB = Symbol.for('Not really unique symbol');

console.log(symbolA === symbolB); // true
