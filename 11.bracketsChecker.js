function checkBrackets(value) {
    var correct = true;
    var open = 0;
    var closed = 0;
    var foOPEN, foCLOSED, loOPEN, loCLOSED;
    //mark first occurence of open and closed bracket
    for (var i = 0; i < value.length; i++) {
        if (value[i]=='(') {
            foOPEN = i;
            break;
        }
    }
    for (var i = 0; i < value.length; i++) {
        if (value[i] == ')') {
            foCLOSED = i;
            break;
        }
    }
    //count occurences of open and closed brackets
    for (var i = 0; i < value.length; i++) {
        if (value[i] == '(') {
            open++;
            loOPEN = i;
        }
        if (value[i] == ')') {
            closed++;
            loCLOSED = i;
        }
    }
    //check if value is correct
    if (open == closed && foOPEN < foCLOSED && loOPEN < loCLOSED) {
        jsConsole.writeLine('correct');
    }
    else {
        jsConsole.writeLine('incorrect');
    }
}

checkBrackets('( ( a + b ) / 5 – d )');
checkBrackets(') ( a + b ) )');
checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )');