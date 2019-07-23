class MondayArray {
    static [Symbol.hasInstance](instance) {
        const isMonday = (new Date().getDay()) === 1;

        return Array.isArray(instance) && isMonday;
    }
}
console.log([1, 2, 3] instanceof MondayArray);
