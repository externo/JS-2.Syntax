function extractContent(value) {
    var arr = [];
    value = value.replace(/<[\s,]+>/, "")
    for (var i = 0; i < value.length; i++) {
        var tmp = '';
        if (value[i]=='<') {
            continue;
        }
        else if(value[i]=='>'){
            tmp += value[i];
        }
    }
    for (var k in arr) {
        jsConsole.writeLine(k + " -> " + 100 * arr[k] / value.length + " %");
        
    }
    jsConsole.writeLine();
}

extractContent('<ul> <li>  <a href=http://softuni.bg>SoftUni</a> </li></ul>');