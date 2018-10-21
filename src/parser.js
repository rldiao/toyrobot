const fs = require('fs');

var fileDir;

var parserFunctions = function() {
    function parseCommands() {
        var commands = fs.readFileSync(this.fileDir, 'utf8');
        commands = commands.split(/\r?\n/)

        return commands
    }

    function setFileDir(fileDir) {
        this.fileDir = fileDir;
    }

    return {
        parseCommands: parseCommands,
        setFileDir: setFileDir
    }
}();

module.exports = parserFunctions;