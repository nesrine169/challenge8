const person1 = { name: "nesrine", age: 19
};
const person2 = { name: "wassim", age: 50
};
const person3 = { name: "camelia", age: 48
};

const people = [person1, person2, person3];
function PeopleOver30(array) {
    return array.filter(person => person.age > 30);
}

const peopleOver30 = PeopleOver30(people);
console.log(peopleOver30);