function findPalindromes(value) {
    value = value.replace(/\d/, '');
    value = value.split('.').join("");
    value = value.split(/[\s,]+/);
    jsConsole.writeLine(value);
    var arr = [];
    for (var i = 0; i < value.length; i++) {
        var word = value[i];
        if (word.toLowerCase() == word.split("").reverse().join("").toLowerCase()) {
            arr.push(word);
        }
    }
    arr = arr.sort();

    jsConsole.writeLine(arr);
}

findPalindromes("We are living in a yellow submarine. We will move out of it in 5 days.");
findPalindromes('There is a madam, his name was Bob.');
findPalindromes("But you were living in another world tryin' to get your message through.");