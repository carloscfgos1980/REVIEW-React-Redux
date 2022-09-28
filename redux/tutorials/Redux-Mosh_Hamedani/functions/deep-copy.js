const person = {
    name: 'John',
    address: {
        country: "USA",
        city: "SAn Francisco"
    }
};
// Update the person name
const upDated = {
    ...person,
    name: 'Bob'
};


//We should not do this cos we are changing the original object, instead we do a deep copy
//upDated.address.city = 'New York';

// This a is the proper way to do it. Do a deep copy and the change the element we want. Like the following example
const upDated2 = {
    ...person,
    address: {
        ...person.address,
        city: 'New York'
    },
    name: 'Bob'
};

console.log(person);