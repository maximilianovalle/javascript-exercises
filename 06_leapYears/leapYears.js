const leapYears = function(year) {
    let divisibleBy4 = false;
    let divisibleBy100 = false;
    let divisibleBy400 = false;

    if (year % 4 == 0) divisibleBy4 = true;
    if (year % 100 == 0) divisibleBy100 = true;
    if (year % 400 == 0) divisibleBy400 = true;

    if (!divisibleBy4) return false;
    else if (!divisibleBy100) return true;
    else if (!divisibleBy400) return false;
    else return true;

    // not divisible by 4 = false
    // divisible by 4, not divisible by 100 = true
    // divisible by 4, divisible by 100, not divisible by 400 = false
    // divisible by 4, divisible by 100, divisible by 400 = true
};

// Do not edit below this line
module.exports = leapYears;
