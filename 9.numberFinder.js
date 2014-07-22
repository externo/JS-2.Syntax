function findMostFreqNum(value) {
    var arr = [];
    for (var i = 0; i < value.length; i++){
        var key = value[i];
        if (!arr[key]) {
            arr[key] = 1;
        }
        else {
            arr[key] += 1;
        }
    }
    var max = 1;
    for (var k in arr) {
        if (arr[k]>max){
            max = arr[k];
            el = k;
        }
    }
    jsConsole.writeLine(el + "(" + max + " times)");
    jsConsole.writeLine();
}

findMostFreqNum([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]);
findMostFreqNum([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]);
findMostFreqNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);