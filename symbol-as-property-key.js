const hiddenInfo = Symbol('hidden-info');
const user = {
    id: 1,
    name: 'John Symbol'
};

user[hiddenInfo] = 'Very Secret Message!';

const hiddenInfoKey = Object.getOwnPropertySymbols(user)[0];

for (const userProp in user) {
    console.log('userProp: ', userProp);
}

console.log('getOwnPropertyNames: ', Object.getOwnPropertyNames(hiddenInfo) ); // []

console.log('Hidden Info: ', user[hiddenInfoKey]); // Very Secret Message!
console.log('Hidden Info: ', user[hiddenInfo]);// Very Secret Message!
