function displayProperties(value) {
    var properties = [];
    for (var prop in document) {
        properties.push(prop);
    }

    properties.sort();

    jsConsole.write(properties.join('<br>'));
}
displayProperties();