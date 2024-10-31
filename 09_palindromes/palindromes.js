const palindromes = function (myString) {
    let arr = myString.split(); // ["A"/ " "/ "c"/ "a"/ "r"/ ","/ " "/ "a"/ " "/ "m"/ "a"/ "n"/ ","/ " "/ "a"/ " "/ "m"/ "a"/ "r"/ "a"/ "c"/ "a"/ "."]

    function isLetterNumber(char) {
        let final = false;

        if (char.toUpperCase() == char.toLowerCase()) final = true;
        if (isCharNumber(char)) final = true;

        return final;
    }
    
    let lettersArr = arr.filter(isLetterNumber); // ["A"/ "c"/ "a"/ "r"/ "a"/ "m"/ "a"/ "n"/ "a"/ "m"/ "a"/ "r"/ "a"/ "c"/ "a"]
    let lowerLettersArr = lettersArr.map((element) => element.toLowerCase()); // ["a"/ "c"/ "a"/ "r"/ "a"/ "m"/ "a"/ "n"/ "a"/ "m"/ "a"/ "r"/ "a"/ "c"/ "a"]

    let start2back = "";
    for (let i = 0; i < lowerLettersArr.length(); i++) {
        start2back += lowerLettersArr[i];   // "acaramanamaraca"
    }

    let back2start = "";
    for (let i = lowerLettersArr.length() - 1; i >= 0; i++) {
        back2start += lowerLettersArr[i];   // "acaramanamaraca"
    }

    return (start2back == back2start);
};

// Do not edit below this line
module.exports = palindromes;
