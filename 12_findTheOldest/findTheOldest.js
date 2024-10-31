const findTheOldest = function(objArr) {
    function calculateAge(arrObject) {
        if (!"yearOfDeath" in arrObject) {
            arrObject.yearOfDeath = new Date().getFullYear();
        }

        objArr.age = arrObject.yearOfDeath - arrObject.yearOfBirth;
    }
    
    for (let key in objArr) {
        key.calculateAge();
    }

    let oldest = objArr[0];

    for (let key in objArr) {
        if (key.age > oldest.age) {
            oldest = key;
        }
    }

    return key;
};

// Do not edit below this line
module.exports = findTheOldest;
