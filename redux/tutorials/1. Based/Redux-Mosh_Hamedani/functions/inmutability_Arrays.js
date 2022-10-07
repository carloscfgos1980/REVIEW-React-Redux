const numbers = [1, 2, 3];

//Adding. This will add it to the end
const add1 = [...numbers, 4]

//Adding. This will add it to the beginning
const add2 = [4, ...numbers]

// Adding in a specific location
const index = numbers.indexOf(2);
const add = [
    ...numbers.slice(0, index),
    4,
    ...numbers.slice(index)
]

// Removing number 2 from the array is like this
const remove = numbers.filter(n => n !== 2);

//Updating. Change 2 for 20

const updated = numbers.map(n => n === 2 ? 20 : n);