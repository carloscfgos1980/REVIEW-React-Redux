// Curry method


function add(a) {
    return function (b) {
        return a + b
    }
}
add(1)(5); // add(1, 5)

// Same as above, writing with arrow function
const add2 = a => b => a + b; // (a, b) => a + b

