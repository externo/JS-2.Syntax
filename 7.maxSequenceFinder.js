function findMaxSequence(value) {
    var currentSequence = 1,
        longestSequence = 1,
        indexOfLongest;

    for (var i = 0; i < value.length; i++) {
        if (value[i] < value[i + 1]) {
            currentSequence++;
        } else {
            if (longestSequence < currentSequence) {
                longestSequence = currentSequence;
                indexOfLongest = i - currentSequence + 1;
                console.log(i);
            }
            currentSequence = 1;
        }
    }

    if (longestSequence < 2) {
        jsConsole.writeLine('no');
    }
    else {
        var result = value.slice(indexOfLongest, indexOfLongest + longestSequence);
        jsConsole.writeLine('[' + result + ']');
    }
}


findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
findMaxSequence(['happy']);
findMaxSequence([2, 'qwe', 'qwe', 3, 3, '3']);
findMaxSequence([1, 1, 1, 3, 3, 2, 2, 2]);