function reverseString(value) {
    var newString = '';
    for (var i = 0; i < value.length; i++) {
        newString = value[i] + newString;
    }
    jsConsole.writeLine(newString);
}

reverseString('sample');
reverseString('softUni');
reverseString('java script');