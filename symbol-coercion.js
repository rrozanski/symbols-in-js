const symbolA = +Symbol();          // Error
const symbolB = '' + Symbol();      // Error
const symbolC = Symbol() + 'text';  // Error
