function printNumbers(n) {
    var m = "no";
    for (var i = 1; i <= n; i++) {
        if (n<0) {
            console.log(m);
        }
        if (i%4!=0 && i%5!=0) {
            console.log(i);
        }
	}
}
printNumbers(20);
printNumbers(-5);
printNumbers(13);