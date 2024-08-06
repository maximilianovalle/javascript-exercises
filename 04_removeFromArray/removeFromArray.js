const removeFromArray = function(givenArr, ...elementsToRemove) {
    const GIVEN_ARR_LENGTH = givenArr.length;
    const REMOVE_ARR_LENGTH = elementsToRemove.length;

    const newArr = [];
    let newArrCounter = 0;

    for (let givenElement = 0; givenElement < GIVEN_ARR_LENGTH; givenElement++) {

        outer: for (let removeElement = 0; removeElement < REMOVE_ARR_LENGTH; removeElement++) {

            if (elementsToRemove[removeElement] === givenArr[givenElement]) {
                break outer;    // skip to next element of given array
            }
            
            else if ((removeElement == REMOVE_ARR_LENGTH - 1) && (elementsToRemove[removeElement] != givenArr[givenElement])) {
                newArr[newArrCounter] = givenArr[givenElement];
                newArrCounter++;
            }
        }
    }

    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
