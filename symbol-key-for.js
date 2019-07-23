const symbolA = Symbol('Symbol Example');
const symbolB = Symbol.for('Another Symbol Example');

console.log(Symbol.keyFor(symbolA)); // undefined
console.log(Symbol.keyFor(symbolB)); // Another Symbol Example
