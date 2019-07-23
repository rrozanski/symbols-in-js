const hiddenInfo = Symbol('hidden-info');
const user = {
    id: 1,
    name: 'John Symbol'
};

user[hiddenInfo] = 'Very Secret Message!';

const userAsString = JSON.stringify(user);

console.log('userAsString: ', userAsString); // {"id":1,"name":"John Symbol"}

const anotherUser = { ...user };

console.log('anotherUser: ', anotherUser); // { "id": 1, "name": "John Symbol" }

console.log('User: ', Object.getOwnPropertySymbols(user)); //  [Symbol(hidden-info)]
console.log('Another User: ', Object.getOwnPropertySymbols(anotherUser)); // [Symbol(hidden-info)]
