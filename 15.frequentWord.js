function findMostFreqWord(value) {
    var arr = [];
    value = value.replace(/\d/, '');
    value = value.split('.').join("");
    value = value.split(/[\s,]+/);
    for (var i = 0; i < value.length; i++) {
        var key = value[i].toLocaleLowerCase();
        if (!arr[key]) {
            arr[key] = 1;
        }
        else {
            arr[key] += 1;
        }
    }
    var max = 1;
    for (var k in arr) {
        if (arr[k] > max) {
            max = arr[k];
            el = k.toLowerCase();
        }
    }
    for (var k in arr) {
        if (arr[k] == max) {
            jsConsole.writeLine(k + " -> " + arr[k] + " times");
        }
    }
    jsConsole.writeLine();
}

findMostFreqWord('in the middle of the night');
findMostFreqWord('Welcome to SoftUni. Welcome to Java. Welcome everyone.');
findMostFreqWord('Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.');