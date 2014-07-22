function compareChars(value) {
    var eq = true;
    var min = Math.min(value[0].length, value[1].length);
    var max = Math.max(value[0].length, value[1].length);
    if (min != max) {
        eq = false;
    }
    else {
        for (var i = 0; i < min; i++) {
            if (value[0][i] != value[1][i]) {
                eq = false;
                break;
            }
        }
    }
    if (eq) {
        return "Equal";
    }
    else {
        return "Not Equal";
    }
    //console.log(eq);
}

jsConsole.writeLine(compareChars([['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'], ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q']]));
jsConsole.writeLine(compareChars([['3', '5', 'g', 'd'], ['5', '3', 'g', 'd']]));
jsConsole.writeLine(compareChars([['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'], ['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r']]));