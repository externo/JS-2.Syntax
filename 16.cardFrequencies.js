function findCardFrequency(value) {
    var value = value.split(" ");
    jsConsole.writeLine(value);
    var arr = [];
    for (var i = 0; i < value.length; i++) {
        var key = value[i].substring(0, value[i].length - 1);
        if (!arr[key]) {
            arr[key] = 1;
        }
        else {
            arr[key] += 1;
        }
    }
    for (var k in arr) {
        jsConsole.writeLine(k + " -> " + 100 * arr[k] / value.length + " %");
        
    }
    jsConsole.writeLine();
}

findCardFrequency('8♥ 2♣ 4♦ 10♦ J♥ A♠ K♦ 10♥ K♠ K♦');