function sortArray(value) {
    for (var i = 0; i < value.length-1; i++){
        for (var j = i + 1; j < value.length; j++){
            if (value[i] > value[j]){
                var tmp = value[i];
                value[i] = value[j];
                value[j] = tmp;
            }
        }
    }
    jsConsole.write('[' + value + ']');
}

sortArray([5, 4, 3, 2, 1]);