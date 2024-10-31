const fibonacci = function(position) {
    let arr = [1, 1, 2, 3, 5];
    if (position <= 5) return arr[position];

    for (let i = 5; i < position; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }

    return arr[position - 1];
};

// Do not edit below this line
module.exports = fibonacci;
