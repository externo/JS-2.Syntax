function createArray(value) {
    var arr = new Array(value);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = 5 * i;
    }
    jsConsole.write(arr.join(", "));
}
createArray(20);