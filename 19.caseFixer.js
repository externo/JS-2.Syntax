function fixCasing(value) {
    var up = value.match(/<upcase[^>]*>([\s\S]*?)<\/upcase>/);
    var low = value.match(/<lowcase[^>]*>([\s\S]*?)<\/lowcase>/);
    var mix = value.match(/<mix[^>]*>([\s\S]*?)<\/mix>/);
    value = value.replace(up, up.)
    jsConsole.writeLine(scripts);
}

fixCasing('We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don\'t</mixcase> have <lowcase>anything</lowcase> else.');