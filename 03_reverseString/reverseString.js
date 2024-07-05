const reverseString = function(givenString) {
    let length = givenString.length;
    let reversed = "";

    for (let i = length - 1; i >= 0; i--) {
        reversed += givenString.charAt(i);
    }

    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
