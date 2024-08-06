function isNumber(number) {
    return typeof number == "number";
}

const sumAll = function(num1, num2) {
    if ((num1 < 0) || (num2 < 0) || (!isNumber(num1)) || (!isNumber(num2))) {
        return "ERROR";
    }
    
    else if (num1 > num2) {
        let transferNum = num1;
        num1 = num2;
        num2 = transferNum;
    }

    let num1ToNum2 = num1;
    let sum = num1;

    while (num1ToNum2 < num2) {
        num1ToNum2++;
        sum += num1ToNum2;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
