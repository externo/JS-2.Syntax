function findMinAndMax(value) {
    var minimum = value[0];
    var maximum = value[0];
    for (var i = 0; i < value.length; i++) {
        if (value[i] < minimum) {
            minimum = value[i];
        }
        else if (value[i] > maximum) {
            maximum = value[i];
        }
    }
    console.log("Min -> %d", minimum);
    console.log("Max -> %d", maximum);
}
findMinAndMax([1, 2, 1, 15, 20, 5, 7, 31]);
findMinAndMax([2, 2, 2, 2, 2]);
findMinAndMax([500, 1, -23, 0, -300, 28, 35, 12]);