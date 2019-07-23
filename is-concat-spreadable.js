const workDays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
];
const weekend = [
    'Saturday',
    'Sunday'
];

weekend[Symbol.isConcatSpreadable] = false;

const fullWeek = workDays.concat(weekend);

console.log('fullWeek: ', fullWeek);
