const findTheOldest = function(people) {
    // 1 check its an array
    if (!Array.isArray(people)) {
        throw new TypeError('this is not an array');
    }
    if (people === 0) {
        throw new Error('empty array');
    }
    let oldestPerson = null;
    let maxAge = 0;

    people.map(person => {
        if (person.yearOfDeath === undefined) {
            person.yearOfDeath = new Date().getFullYear();
        }
        const name = person.name;
        const age = person.yearOfDeath - person.yearOfBirth;
        
        if (age > maxAge) {
            maxAge = age;
            oldestPerson = person;
        }
    });
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
