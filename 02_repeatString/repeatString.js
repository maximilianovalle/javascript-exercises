const repeatString = function(givenString, numTimes) {
    if (numTimes < 0) {
        return "ERROR";
    }

    let output = "";
    for (let i = 0; i < numTimes; i++) {
        output += givenString;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;