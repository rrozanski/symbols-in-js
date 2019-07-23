const symbolA = Symbol();
const symbolB = Symbol();

console.log(symbolA === symbolB); // false

const firstSymbol = Symbol('symbol-description');
const secondSymbol = Symbol('symbol-description');

console.log(firstSymbol === secondSymbol); // false
