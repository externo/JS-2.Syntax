function extractContent(value) {
    value = value.replace(/<(.|\n)*?>/g, '');
    
    jsConsole.writeLine(value);
}

extractContent("<p>Hello</p><a href='http://w3c.org'>W3C</a>");